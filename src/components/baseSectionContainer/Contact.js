import React from 'react'
import Button from '../Button'


class Contact extends React.Component {

    render () {

        return (
            <div>
                <div>
                    <div className='contactContainer'>
                        <div className='centered contactHeader'>
                            <div>
                                <h1 className='heading2'>Get In <span>Touch</span></h1>
                                <p className='descriptionText2'>
                                    sapiente veritatis reprehe suscipit quaerat rerum voluptatibus
                                    veritatis reprehe suscipit
                                </p>
                            </div>
                        </div>

                        <div className='formGrid'>

                            <div className='quickContactLinks'>
                                <div className='backgroundFix contactImage'>

                                </div>
                                <div className='qcl'>
                                    <div>
                                        <span className='icon icon-location2'></span>
                                        <p className='descriptionText2'>395 Killer Street, DeadZone, Lagos, Tokyo City.</p>
                                    </div>

                                    <div>
                                        <span className='icon icon-phone'></span>
                                        <a href='tel:+234-703-068-0817'><p className='descriptionText2'>+234-703-068-0817</p></a>
                                    </div>

                                    <div>
                                        <span className='icon icon-mail'></span>
                                        <a href='mailto:oriolaemmanuel199@gmail.com'><p className='descriptionText2'>oriolaemmanuel199@gmail.com</p></a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <form>
                                    <div className='contactForm'>
                                        <div>
                                            <label for='contact-name'>Fullname</label>
                                            <input required placeholder='Fullname' type='name' name='contact-name'></input>
                                        </div>
                                        <div>
                                            <label for='contact-email'>Email</label>
                                            <input required placeholder='Mail' name='contact-email' type='email'></input>
                                        </div>

                                        <textarea required></textarea>
                                        <div>
                                            <Button buttonText='Send Message' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Contact