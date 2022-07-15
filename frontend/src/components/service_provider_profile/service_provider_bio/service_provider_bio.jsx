import React , { useEffect, useState }from 'react';
import './service_provider_bio_styles.css'
import { Icon } from '@iconify/react';
import './service_provider_bio_styles.css'

const ServiceProviderBio = () => {
    const [addr, setAddr] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [fullName, setFullName] = useState('');
    useEffect(() => {
        setAddr("100 Lorem Ipsum Road - M1C 0B6");
        setFullName("Lorem Ipsum Salons");
      }, []);
    const handleChange = (e) => {
        setAddr(e.target.value);
    }
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape"){
            setIsEdit(false);
            event.target.blur();
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        e.target.blur();
    }
    return(
        <div id="service_provider_bio">
        <div id="service_provider_name">About {fullName}</div>
                    {!isEdit ? 
                    (
                        <div id="user_address">{addr}<button id="edit_button" onClick={ () => {setIsEdit(true)}}><Icon icon="mdi:pencil"  /></button></div>
                    ) : (
                        <textarea id="new_address" maxlength="1500" rows="10" cols="50" value={addr} onChange={handleChange} onKeyDown={onKeyDown} ></textarea>
                    ) }
                    <button id="save_changes" onClick={handleSubmit}>Save Changes</button>
        </div>
    )
}

export default ServiceProviderBio