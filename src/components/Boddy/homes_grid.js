import HomeCard from "../home_card/HomeCard.js";
import LoadingWidget from "../loading/loading.js";
import "./homes_grid.css";


function HomesGrid(props) {


    const t = {
        price: "546",
        adresse: "Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai",
        title: "Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden",
        description: ` A new development that features studios, 1, 2 & 3 bedroom apartments at Dubai Investments Park (DIP)
    
            Original Price: AED 804,472 /- Plus Additional Parking Fee: AED 40,000
            
            - 10% Down payment and 1% monthly. Discount 10%
            - 15 % Down payment and 1% monthly. Discount 12.50% `,
        nb_bed: 5,
        nb_bath: 7,
        sqft: 657,
        type: "Appartement",
        image: "https://images.bayut.com/thumbnails/317967097-800x600.webp",
        images : [
            "https://images.bayut.com/thumbnails/317967097-800x600.webp",
            "https://images.bayut.com/thumbnails/317967097-800x600.webp",
        ],
        wilaya:"alger",
        commune:"baraki",
        publish_date:'12-10-2022',
        type:"Apartment",
        uid:"jhfdgkljfdjgmlmf",
        nom_prenom:"salah eddine",
        use_adresse:"Alger kouba",
        user_emai:"lkgfg@dfgdfg.dfg",
        user_phone:"0560546406"
    };


    const homes = [
        {
            price: "546",
            adresse: "Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai",
            title: "Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden",
            description: ` A new development that features studios, 1, 2 & 3 bedroom apartments at Dubai Investments Park (DIP)
        
                Original Price: AED 804,472 /- Plus Additional Parking Fee: AED 40,000
                
                - 10% Down payment and 1% monthly. Discount 10%
                - 15 % Down payment and 1% monthly. Discount 12.50% `,
            nb_bed: 5,
            nb_bath: 7,
            sqft: 657,
            type: "Appartement",
            image: "https://images.bayut.com/thumbnails/317967097-800x600.webp"
        },
        {
            price: "980",
            adresse: "Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai",
            title: "Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden",
            description: ` A new development that features studios, 1, 2 & 3 bedroom apartments at Dubai Investments Park (DIP)
        
                Original Price: AED 804,472 /- Plus Additional Parking Fee: AED 40,000
                
                - 10% Down payment and 1% monthly. Discount 10%
                - 15 % Down payment and 1% monthly. Discount 12.50% `,
            nb_bed: 5,
            nb_bath: 7,
            sqft: 657,
            type: "Appartement",
            image: "https://images.bayut.com/thumbnails/317481965-800x600.webp"
        },
        {
            price: "123",
            adresse: "Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai",
            title: "Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden",
            description: ` A new development that features studios, 1, 2 & 3 bedroom apartments at Dubai Investments Park (DIP)
        
                Original Price: AED 804,472 /- Plus Additional Parking Fee: AED 40,000
                
                - 10% Down payment and 1% monthly. Discount 10%
                - 15 % Down payment and 1% monthly. Discount 12.50% `,
            nb_bed: 5,
            nb_bath: 7,
            sqft: 657,
            type: "Appartement",
            image: "https://images.bayut.com/thumbnails/317481965-800x600.webp"
        },
        {
            price: "43412",
            adresse: "Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai",
            title: "Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden",
            description: ` A new development that features studios, 1, 2 & 3 bedroom apartments at Dubai Investments Park (DIP)
        
                Original Price: AED 804,472 /- Plus Additional Parking Fee: AED 40,000
                
                - 10% Down payment and 1% monthly. Discount 10%
                - 15 % Down payment and 1% monthly. Discount 12.50% `,
            nb_bed: 5,
            nb_bath: 7,
            sqft: 657,
            type: "Appartement",
            image: "https://images.bayut.com/thumbnails/317481965-800x600.webp"
        },
        {
            price: "231234",
            adresse: "Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai",
            title: "Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden",
            description: ` A new development that features studios, 1, 2 & 3 bedroom apartments at Dubai Investments Park (DIP)
        
                Original Price: AED 804,472 /- Plus Additional Parking Fee: AED 40,000
                
                - 10% Down payment and 1% monthly. Discount 10%
                - 15 % Down payment and 1% monthly. Discount 12.50% `,
            nb_bed: 5,
            nb_bath: 7,
            sqft: 657,
            type: "Appartement",
            image: "https://images.bayut.com/thumbnails/317481965-800x600.webp"
        },
        {
            price: "0879",
            adresse: "Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai",
            title: "Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden",
            description: ` A new development that features studios, 1, 2 & 3 bedroom apartments at Dubai Investments Park (DIP)
        
                Original Price: AED 804,472 /- Plus Additional Parking Fee: AED 40,000
                
                - 10% Down payment and 1% monthly. Discount 10%
                - 15 % Down payment and 1% monthly. Discount 12.50% `,
            nb_bed: 5,
            nb_bath: 7,
            sqft: 657,
            type: "Appartement",
            image: "https://images.bayut.com/thumbnails/317481965-800x600.webp"
        },

        {
            price: "9898",
            adresse: "Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai",
            title: "Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden",
            description: ` A new development that features studios, 1, 2 & 3 bedroom apartments at Dubai Investments Park (DIP)
        
                Original Price: AED 804,472 /- Plus Additional Parking Fee: AED 40,000
                
                - 10% Down payment and 1% monthly. Discount 10%
                - 15 % Down payment and 1% monthly. Discount 12.50% `,
            nb_bed: 5,
            nb_bath: 7,
            sqft: 657,
            type: "Appartement",
            image: "https://images.bayut.com/thumbnails/318776129-800x600.webp"
        },

        {
            price: "7878",
            adresse: "Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai",
            title: "Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden",
            description: ` A new development that features studios, 1, 2 & 3 bedroom apartments at Dubai Investments Park (DIP)
        
                Original Price: AED 804,472 /- Plus Additional Parking Fee: AED 40,000
                
                - 10% Down payment and 1% monthly. Discount 10%
                - 15 % Down payment and 1% monthly. Discount 12.50% `,
            nb_bed: 5,
            nb_bath: 7,
            sqft: 657,
            type: "Appartement",
            image: "https://images.bayut.com/thumbnails/318776129-800x600.webp"
        },

        {
            price: "234243",
            adresse: "Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai",
            title: "Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden",
            description: ` A new development that features studios, 1, 2 & 3 bedroom apartments at Dubai Investments Park (DIP)
        
                Original Price: AED 804,472 /- Plus Additional Parking Fee: AED 40,000
                
                - 10% Down payment and 1% monthly. Discount 10%
                - 15 % Down payment and 1% monthly. Discount 12.50% `,
            nb_bed: 5,
            nb_bath: 7,
            sqft: 657,
            type: "Appartement",
            image: "https://images.bayut.com/thumbnails/318776129-800x600.webp"
        },

    ];
    return (
        <div className='homes_grid'>


            {homes?.map((data) => (
                <HomeCard
                    key={data.price}
                    price={data.price}
                    adresse={data.adresse}
                    title={data.title}
                    description={data.description}
                    nb_bed={data.nb_bed}
                    nb_bath={data.nb_bath}
                    sqft={data.sqft}
                    type={data.type}
                    image={data.image}

                />
            ))}
        </div>
    )


}

export default HomesGrid




