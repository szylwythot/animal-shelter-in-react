import React, { useState } from 'react';
import './DogProfilePageStyle.css';
import DogProfileContent from './DogProfileContent';




function DogProfilePage({ dogProfileData, selectedId }) {

    // const [selectedIdState, setselectedIdState] = useState(selectedId);

    return (
        <section className="DogProfileSection" id="DogProfileSection">
            {
                //  dogProfileData.map((dog, index) => {
                    // console.log(dogProfileData);
                    // console.log(dog);
                    // console.log(selectedId);
                    // console.log(key);
                    <DogProfileContent info={dogProfileData.filter((dog, index) => {
                        console.log(dog)
                        console.log(dog.id)
                        console.log(selectedId)
                        // return true;
                        return dog.id === selectedId[0].id;
                    })[0]} />

                    
                // (<DogProfileContent info={dogProfileData[0]} />)
            }
            
            {/* <DogProfileContent info={dogProfileData[0]} /> */}
        </section>
    )
}

export default DogProfilePage