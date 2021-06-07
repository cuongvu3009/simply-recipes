import React from "react"
import Layout from "../components/Layout"

function Contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Get in touch!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur hastage mlks intelligensia
              eidsokn coke neoww
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <button>submit</button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
