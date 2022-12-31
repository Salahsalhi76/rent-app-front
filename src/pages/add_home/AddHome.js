import  { forwardRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


import './AddHome.css';
import SearchDropDown from '../../components/Boddy/searchBar/shared/searchdropdown';
import SearchDropDownCommunes from '../../components/Boddy/searchBar/shared/searchDropDownCommunes';
import { wilayas, communes } from '../../components/Boddy/searchBar/searchBar.js'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddHomeDialog() {
    const [baladiyat, setBaladiyat] = useState([]);
    let navigate = useNavigate(); 

    const handleClose = ()=>{
        navigate(-1);
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
                <CustomAppBar onClose={handleClose} />
                <div className='add_home_content'>

                    <div style={{ display: "flex", alignItems: "center", margin: "15px 0px" }}>
                        <MdHomeWork style={{ fontSize: "22px", color: '#006169' }}   />
                        <h3 style={{ fontSize: "15px", marginLeft: "10px" }}>Caractéristique de l'annonce</h3>
                    </div>


                    <h2>Titre</h2>
                    <input />

                    <h2>Description du bien</h2>
                    <textarea rows={10} />

                    <div className='properties_row'>
                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2> La catégorie du bien</h2>
                            <CustomDropDown items={categories} defaultValue="Sélectionner La catégorie" onChange={() => { }} />

                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2> Le type du bien</h2>
                            <CustomDropDown items={types} defaultValue="Sélectionner Le type" onChange={() => { }} />

                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2>Lits</h2>
                            <input type='number' />
                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2>Beds</h2>
                            <input type="number" />
                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2>Surface </h2>
                            <input type="number" placeholder="m2" />
                        </div>

                    </div>


                    <h2>Prix</h2>
                    <input type="number" placeholder='DA' />


                    <div style={{ display: "flex", alignItems: "center", margin: "15px 0px" }}>
                        <FaMapMarkerAlt style={{ fontSize: "22px", color: '#006169' }}  />
                        <h3 style={{ fontSize: "15px", marginLeft: "10px" }}>Adresse du bien * (obligatoire)</h3>
                    </div>

                    <div className='properties_row'>
                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2>Wilaya</h2>
                            <SearchDropDown items={wilayas} defaultValue="Sélectionner Wilaya" width='100%'
                                onChange={(event) => {
                                    const nb = wilayas.indexOf(event.target.value);

                                    const filtered = communes.filter(function (element) { return element.wilaya === (nb + 1); })

                                    setBaladiyat(filtered);
                                }} />

                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%" }}>
                            <h2>Commune</h2>
                            <SearchDropDownCommunes items={baladiyat} defaultValue="Sélectionner commune" width='100%' onChange={() => { }} />

                        </div>

                    </div>




                    <div style={{ display: "flex", alignItems: "center", margin: "15px 0px" }}>
                        <BsFillPersonLinesFill style={{ fontSize: "22px", color: '#006169' }}  />
                        <h3 style={{ fontSize: "15px", marginLeft: "10px" }}>Les informations de contact</h3>
                    </div>


                    <h2>nom et prénom</h2>
                    <input />


                    <h2>Adresse</h2>
                    <textarea rows={3} />

                    <div className='properties_row'>
                        <div style={{ display: "flex", "flexDirection": "column", width: "100%", marginRight: '10px' }}>
                            <h2>Email</h2>
                            <input type="email" style={{ width: '97%', marginRight: '10px' }} />
                        </div>

                        <div style={{ display: "flex", "flexDirection": "column", width: "100%" }}>
                            <h2>N° Téléphone</h2>
                            <input type="phone" style={{ width: '100%' }} />

                        </div>

                    </div>

                </div>

            </div>


        </Dialog>
    );
}


const CustomAppBar = (props) => {
    return <div className='addhome_appbar'>
        <div style={{ display: "flex", alignItems: "center" }}>
            <AiOutlineArrowLeft style={{ fontWeight: "bold", fontSize: "20px" }}  onClick={props.onClose} />
            <h2>Créer une annonce</h2>
        </div>


        <button >Share</button>
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