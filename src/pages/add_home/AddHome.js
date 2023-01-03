import { forwardRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage"

import './AddHome.css';
import SearchDropDown from '../../components/Boddy/searchBar/shared/searchdropdown';
import SearchDropDownCommunes from '../../components/Boddy/searchBar/shared/searchDropDownCommunes';
import { wilayas, communes } from '../../components/Boddy/searchBar/searchBar.js'
import { borderRadius } from '@mui/system';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddHomeDialog() {
    const [baladiyat, setBaladiyat] = useState([]);
    const [images, setImages] = useState([]);

    const [title, setTitle] = useState("");
    const [description, setDiscription] = useState("");
    const [categorie, setCategorie] = useState("");
    const [type, setType] = useState("");
    const [lit_nb, setLitsnb] = useState();
    const [bed_nb, setBednb] = useState();
    const [Surface, setSurface] = useState();
    const [wilaya, setWilaya] = useState();
    const [baladiya, setBaladiya] = useState();
    const [name, setName] = useState();
    const [adresse, setAddresse] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [price, setPrice] = useState();





    let navigate = useNavigate();

    const handleClose = () => {
        navigate(-1);
    }
    console.log(images);

    const addImagesHandler = (data) => {
        if (data.target.files.length == 0) return;

        setImages([...images, ...data.target.files]);
    }

    const app = initializeApp({
        apiKey: "AIzaSyBkwCab_ZvxVN3nlMaQ8_GCG9nJelBywwU",
        authDomain: "homeapp-beca5.firebaseapp.com",
        projectId: "homeapp-beca5",
        storageBucket: "homeapp-beca5.appspot.com",
        messagingSenderId: "646593078117",
        appId: "1:646593078117:web:2a4ca4e16620e230f1b78c",
        measurementId: "G-FN7VQ6Z1CS"
    });


    const storage = getStorage(app);



    const uploadImages = () => {
        if (images.length == 0) {
            alert("Please choose at least one image")
            return [];
        }


        const links = [];

        const fd = new FormData();
        images.forEach(file => {
            fd.append("image", file, file.name);

            const storageRef = ref(storage, `/files/${file.name}`)
            uploadBytesResumable(storageRef, file).then(
                res => {
                    getDownloadURL(res.ref).then(url => {
                        links = [url, ...links];
                    });
                }
            );

        });

        return links;
    }


    const ShareHome = () => {
        console.log(title);
        console.log(description);
        console.log(categorie);
        console.log(type);
        console.log(lit_nb);
        console.log(bed_nb);
        console.log(Surface);
        console.log(wilaya);
        console.log(baladiya);
        console.log(name);
        console.log(adresse);
        console.log(email);
        console.log(phone);
        console.log(price);
    }



    const types = ["Terrain", "Terrain Agricole", "Appartement", "Maison", "Bungalow"];
    const categories = ["Vente", "Echange", "Location", "Location pour vacances"];

    return (
        <Dialog
            fullScreen
            open={true}
            onClose={handleClose}
            TransitionComponent={Transition}>

            <div style={{ backgroundColor: "white" }}>
                <CustomAppBar onClose={handleClose} onShare={ShareHome} />
                <div className='add_home_content'>

                    <div style={{ display: "flex", alignItems: "center", margin: "15px 0px" }}>
                        <MdHomeWork style={{ fontSize: "22px", color: '#006169' }} />
                        <h3 style={{ fontSize: "15px", marginLeft: "10px" }}>Caractéristique de l'annonce</h3>
                    </div>


                    <h2>Titre</h2>
                    <input onChange={value => {
                        setTitle(value.target.value);
                    }} />

                    <h2>Description du bien</h2>
                    <textarea rows={10} onChange={value => {
                        setDiscription(value.target.value);
                    }} />

                    <div className='properties_row'>
                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2> La catégorie du bien</h2>
                            <CustomDropDown items={categories} defaultValue="Sélectionner La catégorie" onChange={value => {
                                setCategorie(value.target.value);
                            }} />

                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2> Le type du bien</h2>
                            <CustomDropDown items={types} defaultValue="Sélectionner Le type" onChange={value => {
                                setType(value.target.value);
                            }} />

                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2>Lits</h2>
                            <input type='number' onChange={value => {
                                setLitsnb(value.target.value);
                            }} />
                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2>Beds</h2>
                            <input type="number" onChange={value => {
                                setBednb(value.target.value);
                            }} />
                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2>Surface </h2>
                            <input type="number" placeholder="m2" onChange={value => {
                                setSurface(value.target.value);
                            }} />
                        </div>

                    </div>


                    <h2>Prix</h2>
                    <input type="number" placeholder='DA' onChange={value => {
                        setPrice(value.target.value);
                    }} />


                    <div style={{ display: "flex", alignItems: "center", margin: "15px 0px" }}>
                        <FaMapMarkerAlt style={{ fontSize: "22px", color: '#006169' }} />
                        <h3 style={{ fontSize: "15px", marginLeft: "10px" }}>Adresse du bien * (obligatoire)</h3>
                    </div>

                    <div className='properties_row'>
                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2>Wilaya</h2>
                            <SearchDropDown items={wilayas} defaultValue="Sélectionner Wilaya" width='100%'
                                onChange={(event) => {
                                    const nb = wilayas.indexOf(event.target.value);

                                    const filtered = communes.filter(function (element) { return element.wilaya === (nb + 1); })
                                    setWilaya(event.target.value);
                                    setBaladiyat(filtered);
                                }} />

                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%" }}>
                            <h2>Commune</h2>
                            <SearchDropDownCommunes items={baladiyat} defaultValue="Sélectionner commune" width='100%' onChange={value => {
                                setBaladiya(value.target.value);
                            }} />

                        </div>

                    </div>




                    <div style={{ display: "flex", alignItems: "center", margin: "15px 0px" }}>
                        <BsFillPersonLinesFill style={{ fontSize: "22px", color: '#006169' }} />
                        <h3 style={{ fontSize: "15px", marginLeft: "10px" }}>Les informations de contact</h3>
                    </div>


                    <h2>nom et prénom</h2>
                    <input onChange={value => {
                        setName(value.target.value);
                    }} />


                    <h2>Adresse</h2>
                    <textarea rows={3} onChange={value => {
                        setAddresse(value.target.value);
                    }} />

                    <div className='properties_row'>
                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2>Email</h2>
                            <input type="email" style={{ width: '97%', marginRight: '10px' }} onChange={value => {
                                setEmail(value.target.value);
                            }} />
                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%" }}>
                            <h2>N° Téléphone</h2>
                            <input type="phone" style={{ width: '100%' }} onChange={value => {
                                setPhone(value.target.value);
                            }} />

                        </div>

                    </div>

                    <div style={{ alignContent: 'center', alignItems: "center", display: "flex", flexDirection: "column" }}>

                        <label htmlFor='images' style={{
                            alignSelf: "center",
                            border: "solid grey 0.1px",
                            margin: '25px 0px',
                            width: "70%",
                            alignItems: "center",
                            alignContent: "center"
                        }} >

                            <img
                                style={{
                                    height: "250px",
                                    alignSelf: "center"
                                }}
                                src='https://static.vecteezy.com/system/resources/previews/004/968/473/original/upload-or-add-a-picture-jpg-file-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg' />

                        </label>

                        <input onChange={addImagesHandler} type="file" multiple accept='.jpg,.png,.svg,.jpeg' id='images' style={{ display: "none" }} />


                        {images.length != 0 && <ImagesWidget images={images} onRemoveImage={(img) => {
                            const result = images.filter(item => item != img);

                            setImages(result);
                        }} />}
                    </div>

                </div>

            </div>

        </Dialog>
    );
}


const CustomAppBar = (props) => {
    return <div className='addhome_appbar'>
        <div style={{ display: "flex", alignItems: "center" }}>
            <AiOutlineArrowLeft style={{ fontWeight: "bold", fontSize: "20px" }} onClick={props.onClose} />
            <h2>Créer une annonce</h2>
        </div>


        <button onClick={props.onShare}>Share</button>
    </div>
}

function CustomDropDown(props) {
    const items = props.items;
    const value = props.value;
    const defaultValue = props.defaultValue;

    return (
        <select value={value} onChange={props.onChange} className='custom_dropdown'>

            <option hidden>{defaultValue}</option>
            {
                items.map(data => {
                    return (
                        <option key={data} value={data}  >
                            {data}
                        </option>
                    );
                })
            }

        </select >
    );
}


const ImagesWidget = (props) => {
    return <div className='display-images'>
        {props.images.map((img, index) => {
            return <div style={{
                position: "relative",
                overflow: "hidden",
            }}>
                <img key={index} src={URL.createObjectURL(img)} />



                <TiDeleteOutline style={{
                    fontSize: "24px",
                    alignSelf: "center",
                    color: "red",
                    right: "0",
                    top: "5px",
                    left: "5px",
                    bottom: "0",
                    position: "absolute",
                }}
                    onClick={() => { props.onRemoveImage(img); }} />
            </div>

        })}

    </div>
}










