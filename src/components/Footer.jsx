import React from 'react'
import {footerSocials} from '../Data'
import {footerContacts} from '../Data'
import {explores} from '../Data'
import {payements} from '../Data'
import {mainMenu} from '../Data'


const Footer = () => {
  return (
    <div className='section'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8' >
            <div>
                <div className='text-xl font-semibold mb-3'>
                    FoodZone
                </div>
                <p className='text-[1rem] mb-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente autem aspernatur alias, fugit deserunt sunt. Cupiditate delectus odio animi, at esse quia enim eius quos! Cum necessitatibus laudantium aut! 
                </p>
                <div className='flex items-center gap-4'>
                    <span className=''>Follow Us</span>
                    <div className='h-[2px] w-12 bg-black'></div>
                    {footerSocials.map((footerSocial, index) => {
                        return (
                            <div className='' key={index} id="lgo">
                                <a href="#">{footerSocial}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <h3 className='font-semibold text-[1.1rem] mb-4'>Main Menu</h3>
                    {mainMenu.map((menu) => {
                        return(
                            <div className='text-[1rem] mb-2' key={menu.id}>
                                <a href={`#${menu.href}`}>{menu.text}</a>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className=''>
                <div>
                    <h3 className='font-semibold text-[1.1rem] mb-4'>Explore</h3>
                    {explores.map((explore,index) => {
                        return(
                            <div className='text-[1rem] mb-2' key={index}>
                                <a href='#'>{explore}</a>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className=''>
                <div>
                    <h3 className='font-semibold text-[1.1rem] mb-4'>Contact</h3>
                    {footerContacts.map((contact) => {
                        return(
                            <div className='flex items-center gap-4 mb-4' key={contact.id} >
                                <div className='text-xl' id="lgo1">{contact.icon}</div>
                                <div className=''>{contact.text}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>

            <div className='flex flex-wrap justify-between gap-4 pb-8'>
                <div className=''>
                    Copyright &#169; <span className="font-bold">Ruturaj</span>. All
                    rights deserved.
                </div>
                <div className="flex gap-8">
                    {payements.map((payment, index) => {
                        return (
                        <div className="" key={index}>
                            <img src={payment} alt="" className="w-10" />
                        </div>
                        );
                    })}
                </div>
            </div>


        
    </div>
  )
}

export default Footer
