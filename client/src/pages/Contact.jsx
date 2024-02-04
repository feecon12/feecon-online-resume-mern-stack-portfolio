import Button from "../components/Button"
import Layout from "../components/Layout"

const Contact = () => {
    return (
        <div>
            <Layout>
                <h2 className='font-bold text-8xl w-full text-center md:text-6xl xs:text-4xl'>
                    Contact
                </h2>
                <form className="w-1/2">
                    <fieldset className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id=""
                            placeholder="say something"

                            className="px-2 py-1"
                        />
                        <label htmlFor="name">Email</label>
                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="your email"

                            className="px-2 py-1"
                        />
                        <label htmlFor="query">Message</label>
                        <textarea
                            type="email"
                            name="email"
                            id=""
                            placeholder="tell your query"

                            className="px-2 py-1"
                        />
                        {/* <button className="border bg-dark text-light w-[50%]">
                          Submit
                      </button> */}

                        <Button
                            text={'Submit'}
                            className=" w-[6.2rem] hover:border-dark"
                        />


                    </fieldset>
                </form>
            </Layout>
        </div>
    )
}

export default Contact