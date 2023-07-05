import React, { useEffect, useState } from 'react'
import makeAPIRequest from '../global/apiCall'
import API_CONST from '../global/apiKey'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function PropertyCard() {
    const [propertyData, setPropertyData] = useState([])
    // const [propertyType, setPropertyType] = useState('residential')
    const [activeTag, setActiveTag] = useState(1);

    // Get List Of Sub Property Type
    // useEffect(() => {
    //     makeAPIRequest('get', `${API_CONST.view_property}?type=${propertyType}`, null, null, null)
    //         .then((response) => {
    //             // console.log(response);
    //             setPropertyData(response.data.data)
    //         })
    //         .catch(async (error) => {
    //             console.log(error);
    //         })
    // }, [])

    // Set backgroundColor of activeTag
    const handleClick = (tagIndex, type) => {
        setActiveTag(tagIndex);
        document.getElementById('isPropertyShow').style.display = 'block'
        if (type === 'sell') {
            const propertyType='residential'
            document.getElementById('residential').style.display = 'block'
            document.getElementById('commercial').style.display = 'none'

            makeAPIRequest('get', `${API_CONST.view_property}?type=${propertyType}`, null, null, null)
            .then((response) => {
                // console.log(response);
                setPropertyData(response.data.data)
            })
            .catch(async (error) => {
                console.log(error);
            })
        } else {
            const propertyType='commercial'
            document.getElementById('commercial').style.display = 'block'
            document.getElementById('residential').style.display = 'none'

            makeAPIRequest('get', `${API_CONST.view_property}?type=${propertyType}`, null, null, null)
            .then((response) => {
                // console.log(response);
                setPropertyData(response.data.data)
            })
            .catch(async (error) => {
                console.log(error);
            })
        }
    };

    // Get List Of Sub Property Type
    const handleChange = (event) => {
        // setPropertyType(event.target.value)
        // makeAPIRequest('get', `${API_CONST.view_property}?type=${event.target.value}`, null, null, null)
        //     .then((response) => {
        //         // console.log(response);
        //         setPropertyData(response.data.data)
        //     })
        //     .catch(async (error) => {
        //         console.log(error);
        //     })
    }
    return (
        <div className='card-main-body'>
            <div className="card-body">
                <div className="card-header-part">
                    <h3 className='mb-4'>Start posting your property, it's free</h3>
                </div>
                <div className="card-body-part mt-4">
                    <div className="looking-property">
                        <span onClick={() => handleClick(1, 'sell')} className={activeTag === 1 ? 'bg-salmon' : ''}>Sell</span>
                        <span onClick={() => handleClick(4, 'rent')} className={activeTag === 4 ? 'bg-salmon' : ''}>Rent</span>
                    </div>
                    <div className="property-type mt-5" style={{ display: "none" }} id='isPropertyShow'>
                        <div className="radio-btns mt-2">
                            <h3 id='residential'>Residential</h3>
                            <h3 id='commercial'>Commercial</h3>
                        </div>
                        <div className="property-type-details mt-2">
                            {
                                propertyData.map((items, index) => {
                                    return (
                                        <div key={index} className='single-property'>
                                            {items.propertyInfo.subPropertyType}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="submit-btn mt-5">
                            <Stack direction="row" spacing={2}>
                                <Button fullWidth variant="contained"
                                    endIcon={<SendIcon />} style={{ padding: "15px 0", fontSize: "16px", fontWeight: "600" }}>
                                    Start Now
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard

{/* <span onClick={() => handleClick(2)} className={activeTag === 2 ? 'bg-salmon' : ''}>Lease</span> */ }
{/* <span onClick={() => handleClick(3)} className={activeTag === 3 ? 'bg-salmon' : ''}>Buy</span> */ }

{/* <div className="user-contact-info mt-5">
                            <h5>Your contact details for the buyer to reach you</h5>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                                style={{ margin: "0" }}
                            >
                                <TextField id="standard-basic" label="Phone Number" variant="standard" style={{ margin: "0", width: "100%" }} />
                            </Box>
                            <h6 className="login-part mt-2">
                                <span>Are you a registered user? </span>
                                <a href="#" className='text-decoration-none'>Login</a>
                            </h6>
                        </div> */}