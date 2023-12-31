import { useFormik, useField } from 'formik';

import Select from 'react-select';
import useAxiosPublic from '../../../Components/hooks/useAxiosPublic';
import moment from 'moment';
import useAxiosSecure from '../../../Components/hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const options = [
    { value: '', label: 'Select' },
    { value: 'Rabbit', label: 'Rabbit' },

    { value: 'Cat', label: 'Cat' },
    { value: 'Dog', label: 'Dog' },
    { value: 'Fish', label: 'Fish' },
];




const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`;

const CLOUDINARY_URL_WITH_PRESET = `${CLOUDINARY_URL}?upload_preset=${import.meta.env.VITE_UPLOAD_PRESET}`;




const AddPet = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const axiosSecure=useAxiosSecure();
    const validate = (values) => {
        const errors = {};
        if (!values.PetName) {
            errors.PetName = 'Required';
        } else if (values.PetName.length > 15) {
            errors.PetName = 'Must be 15 characters or less';
        }

        if (!values.PetLocation) {
            errors.PetLocation = 'Required';
        } else if (values.PetLocation.length > 15) {
            errors.PetLocation = 'Must be 15 characters or less';
        }
        if (!values.PetAge) {
            errors.PetAge = 'Required';
        } else if (values.PetAge <= 0) {
            errors.PetAge = 'Must be greater than 0';
        }
        if (!values.ShortDescription) {
            errors.ShortDescription = 'Required';
        } else if (values.ShortDescription.length > 30) {
            errors.ShortDescription = 'Must be 30 characters or less';
        }
        if (!values.LongDescription) {
            errors.LongDescription = 'Required';
        } else if (values.LongDescription.length > 100) {
            errors.LongDescription = 'Must be 100 characters or less';
        }



        return errors;
    };

    const formik = useFormik({
        initialValues: {
            PetName: '',
            PetLocation: '',
            PetAge: '',
            PetCategory: options[0].value,
            image: null,
            ShortDescription:'',
            LongDescription:'',

        },
        validate,
        onSubmit: async (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values);
            const formData = new FormData();
            formData.append('file', values.image);
            
            
            const res = await axiosPublic.post(CLOUDINARY_URL_WITH_PRESET, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            console.log(res.data);
            const Photo=res.data.secure_url;
            console.log(Photo);
            const userInfo={
                PetImage:Photo,
                PetName:values.PetName,
                PetLocation:values.PetLocation,
                PetAge:values.PetAge,
                PetCategory:values.PetCategory,
                ShortDescription:values.ShortDescription,
                LongDescription:values.LongDescription,
                DateOfAdvertisement:moment().format('YYYY-MM-DD'),
                Time:moment().format('h:mm:ss a'),
                Adopted:Boolean(0),
                email:user.email

                
            }
            console.log(userInfo);
            axiosSecure.post('/addPet',userInfo)
                        .then(res=>{
                            if(res.data.insertedId){
                                console.log('Pet added to the database');
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "You have successfully added Pet!",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                formik.resetForm();
                            }
                        })
                        .catch()
                    
                    
            }
        },
    
    )
    return (
        <div className="pl-4">
            <h1 className="text-3xl font-extrabold text-center">ADD A PET</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="PetName">Pet Name</label>
                    <input
                        id="PetName"
                        name="PetName"
                        type="text"
                        className="input input-bordered w-full max-w-full"
                        onChange={formik.handleChange}
                        value={formik.values.PetName}
                    />
                    {formik.errors.PetName && <div className="text-red-400">*{formik.errors.PetName}</div>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="PetAge">Pet Age</label>
                    <input
                        id="PetAge"
                        name="PetAge"
                        type="number"
                        className="input input-bordered w-full max-w-full"
                        onChange={formik.handleChange}
                        value={formik.values.PetAge}
                    />
                    {formik.errors.PetAge && <div className="text-red-400">*{formik.errors.PetAge}</div>}
                </div>
                
                <div >
                    <label htmlFor="PetCategory">Pet Category</label>
                    <Select
                        defaultValue={options[0]} // Set a default option if needed
                        onChange={(selectedOption) =>
                            formik.setFieldValue('PetCategory', selectedOption.value)
                        }

                        options={options}
                    />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="PetAge">Pet Location</label>
                    <input
                        id="PetLocation"
                        name="PetLocation"
                        type="text"
                        className="input input-bordered w-full max-w-full"
                        onChange={formik.handleChange}
                        value={formik.values.PetLocation}
                    />
                    {formik.errors.PetLocation && <div className="text-red-400">*{formik.errors.PetLocation}</div>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="ShortDescription">Short Description</label>
                    <input
                        id="ShortDescription"
                        name="ShortDescription"
                        type="text"
                        className="input input-bordered w-full max-w-full"
                        onChange={formik.handleChange}
                        value={formik.values.ShortDescription
                        }
                    />
                    {formik.errors.ShortDescription
                        && <div className="text-red-400">*{formik.errors.ShortDescription
                        }</div>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="LongDescription">Long Description</label>
                    <input
                        id="LongDescription"
                        name="LongDescription"
                        type="text"
                        className="input input-bordered w-full max-w-full"
                        onChange={formik.handleChange}
                        value={formik.values.LongDescription
                        }
                    />
                    {formik.errors.LongDescription
                        && <div className="text-red-400">*{formik.errors.LongDescription
                        }</div>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="UploadImage">Upload Image</label>
                    <input type="file" name="image" className="file-input w-full max-w-full"
                        onChange={(event) => {

                            formik.setFieldValue('image', event.currentTarget.files[0]);
                        }} required />
                </div>


                <button className='btn bg-green-400' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddPet;
