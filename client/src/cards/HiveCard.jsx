import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/userProvider';
import { StyledCard } from '../MiscStyling';

const HiveCard = ({ id,  dateAdded, material, city, state }) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    function handleClick() {
        navigate(`/hives/${id}`);
    }

    return (
        <StyledCard className="hive-card">
            <div 
                className="main-container"
                onClick={handleClick}
            >
                <section className='img-section'>
                    <img
                        src='images/hive.png'
                        alt='bee hive'
                    />
                </section>
                <section className='info-section'>
                    <div>
                        <label>Material: </label>
                        <p>{material}</p>
                    </div>
                    <div>
                        <label>Added: </label>
                        <p>{dateAdded}</p>
                    </div>
                    <div>
                        <label>City: </label>
                        <p>{city}</p>
                    </div>
                    <div>
                        <label>State: </label>
                        <p>{state}</p>
                    </div>
                </section>  
            </div>
            <div className="bottom-container">
                <span>{`Hive ID: ${id}`}</span>
            </div>
        </StyledCard>
    );
}

export default HiveCard;