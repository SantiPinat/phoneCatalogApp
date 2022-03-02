import React from 'react'
import { PhoneCards } from './components/PhoneCards'


export const PhoneCatalogApp = () => {


    return (
        <section className="container">
            <h1 className="alert-bg text-center">Phone Catalog App</h1>
            <hr></hr>
            <article className="container">
                <PhoneCards/>
            </article>
        </section>
    )
}
