import { useState } from "react"
import Button from "../components/Button"
import Layout from "../components/Layout"

import axios from 'axios'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })

    }

    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            message: ""

        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        try {
            const response = axios.post('http://localhost:3000/api/user', formData)

            console.log(response)

            if (response.ok) {
                const responseData = response.json();
                clearForm()
                console.log(responseData)
            } else {
                console.log('error inside response')
            }
        } catch (err) {
            console.error('error', err.message)
        }
    }

    return (
        <div>
            <Layout>
                <h2 className='font-bold text-8xl w-full text-center md:text-6xl xs:text-4xl'>
                    Contact
                </h2>
                <form className="w-1/2" onSubmit={handleSubmit}>
                    <fieldset className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="say something"
                            onChange={handleChange}

                            className="px-2 py-1"
                        />
                        <label htmlFor="name">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="your email"
                            onChange={handleChange}

                            className="px-2 py-1"
                        />
                        <label htmlFor="query">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            placeholder="tell your query"
                            onChange={handleChange}

                            className="px-2 py-1"
                        />
                        {/* <button className="border bg-dark text-light w-[50%]">
                          Submit
                      </button> */}

                        <Button
                            text={'Submit'}
                            className=" w-[6.2rem] hover:border-dark"
                            type="submit"

                        />
                    </fieldset>
                </form>
            </Layout>
        </div>
    )
}

export default Contact