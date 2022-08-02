import React, { useState, useEffect} from 'react';
import './services_provided.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faCircle, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, useParams } from 'react-router-dom';
import  { useNavigate } from 'react-router-dom'
import ReviewPopup from '../review_popup/review_popup';

function Services_Provided ( {date, time} ) { 

	const navigate = useNavigate();

	const [triggerReviewPopup, setReviewPopup] = useState(false);

	let newItems = [];

	const [items, setItems] = useState([]);

	
	const [totalItemCount, setTotalItemCount] = useState();
    const [subtotal, setSubtotal] = useState();


	const pathname = window.location.pathname;
	const uid = pathname.split("/");
	// console.log(uid[2]);
	const id = uid[2];

	useEffect(() => {
        fetch(`/explore-sp-price-list/${id}`, {credentials: 'include'}).then(response =>
          response.json().then(data => {
            console.log(data);
			setItems(data);
			const defaultQuantity = {quantity : 0};
			Object.keys(data).forEach(key => {
				newItems[key] = {...data[key], ...defaultQuantity };
			});

			setItems(newItems);
          })
        );
      }, []);

	const handleQuantityIncrease = (index) => {
		const NewItems = [...items];
		NewItems[index].quantity++;
		setItems(NewItems);
		calculateTotal();
        calculateSubtotal();
	};

	const handleQuantityDecrease = (index) => {
		const NewItems = [...items];
		if(NewItems[index].quantity<1){
        NewItems[index].quantity=0;
		}else{
			NewItems[index].quantity--;
		}
		setItems(NewItems);
		calculateTotal();
        calculateSubtotal();
	};


	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);
		setTotalItemCount(totalItemCount);
	};

    const calculateSubtotal = () => {
		const subtotal= items.reduce((subtotal, item) => {
			return subtotal + item.quantity * item.price;
		}, 0);
		setSubtotal(subtotal);
	};

	const handleCheckout = () => {
		const servicesList = [];
		Object.keys(items).forEach(function(key) {
			if (items[key].quantity > 0) {
				servicesList.push(items[key].service)
			}
		});
		var servicesString = servicesList.join(', ');

		const body = {
			sp_uid: id,
			services: servicesString,
            date: date.toISOString().substring(0, 10),
            time: time,
			price: subtotal.toFixed(2)
        }

		fetch("http://localhost:5000/add-appointment", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(body)
        }).then(response => {
			if (response.ok){
				setReviewPopup(true); 
				setTimeout(function () {
					navigate('/customer-my-appointments');
					window.location.reload();
				}, 1500);
			}else{
                throw new Error(response.statusTest)
            }
        })
    }

	return (
        <div className = "services-provided">
			<div className='app-background'>
				<div className='main-container'>
					<div className='item-list'>
						{items.map((item, index) => (
							<div className='item-container'>
								<div className='item-name'>
											<FontAwesomeIcon icon={faCircle} />
											<span><b>{item.service}</b> - ${parseFloat(item.price).toFixed(2)}</span>
								</div>
								<div className='quantity'>
									<button>
										<FontAwesomeIcon icon={faMinusCircle} onClick={() => handleQuantityDecrease(index)} />
									</button>
									<span> {item.quantity} </span>
									<button>
										<FontAwesomeIcon icon={faPlusCircle} onClick={() => handleQuantityIncrease(index)} />
									</button>
								</div>
							</div>
						))}
					</div>
					</div>
					<div className='total'>Total number of services: {totalItemCount}</div>
			</div>
			<div className="buttons">
				<div className='subtotal'> <b>Subtotal: ${parseFloat(subtotal).toFixed(2)}</b></div>
				<div className='payment'> <button onClick={handleCheckout} className='paymentButton'> <b>Checkout and Pay</b> <FontAwesomeIcon className='checkout_arrowicon'icon={faArrowRight}/></button></div>
			</div>
			<ReviewPopup trigger={triggerReviewPopup}/>
        </div>
	);
};

export default Services_Provided;