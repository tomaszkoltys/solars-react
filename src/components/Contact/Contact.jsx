import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import images from "../../constants/images";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {  motion } from "framer-motion";
import { verticalAnimation } from '../../animations/verticalAnimation';


const Contact = () => {
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    const notify = (isSuccess) => {
        if (isSuccess) {
          toast.success("Formularz został wysłany", {
            position: toast.POSITION.TOP_CENTER
          });
        } 
      };

  const validationSchema = yup.object().shape({
    from_name: yup.string().required("Uzupełnij to pole").matches(/^[A-Za-z\s]{3,}$/, "Pole musi zawierać co najmniej 3 litery"),
    from_surname: yup.string().required("Uzupełnij to pole").matches(/^[A-Za-z\s]{3,}$/, "Pole musi zawierać co najmniej 3 litery"),
    from_phone: yup.string().required("Uzupełnij to pole").matches(/^\d{9}$/, "Pole musi zawierać dokładnie 9 cyfr"),
    from_email: yup.string().email("Pole musi zawierać znak @").required("Uzupełnij to pole").matches(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/, "Pole musi zawierać znak @"),
    checkbox: yup.boolean().oneOf([true], 'Zaakceptuj zgodę').required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs.sendForm('service_i5jy9ts', 'template_s83p3ir', e.target, 'Jd7LEUBARwOtsj9ly')
      .then((result) => {
          console.log(result.text);
          setFormSubmitted(true);
            e.target.reset();
            notify(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact section__padding" id="form__move">
      <div className="container">
        <h2 className="section__title text__center">Formularz kontaktowy</h2>
        <div className="contact__content grid">
          <div className="contact__content--left">
            <img src={images.contact} alt="" className='image'/>        
          </div>
          <motion.div className="contact__content--right" variants={verticalAnimation} initial="initial" whileInView="animate" viewport={{ once: true}}>
            <form onSubmit={handleSubmit(sendEmail)}>
              <div className="form__elem">
                <label className="form__label text__upper">Imię</label>
                <input type="text" className="form__control" name="from_name" required {...register('from_name')} />
                {errors.from_name && <p className="error__message">{errors.from_name.message}</p>}
              </div>
              <div className="form__elem">
                <label className="form__label text__center text__upper">Nazwisko</label>
                <input type="text" className="form__control" name="from_surname" required {...register('from_surname')} />
                {errors.from_surname && <p className="error__message">{errors.from_surname.message}</p>}
              </div>
              <div className="form__elem--2">
                <div className="form__elem">
                  <label className="form__label text__upper">Telefon</label>
                  <input type="tel" className="form__control" name="from_phone" inputMode="numeric" maxLength={9} required {...register('from_phone')} onKeyPress={(e) => { const charCode = e.charCode || e.keyCode; 
                    if (charCode < 48 || charCode > 57) 
                      { e.preventDefault();}}}/>
                  {errors.from_phone && <p className="error__message">{errors.from_phone.message}</p>}
                </div>
                <div className="form__elem">
                  <label className="form__label text__upper">Email</label>
                  <input type="email" className="form__control" name="from_email" required {...register('from_email')} />
                  {errors.from_email && <p className="error__message">{errors.from_email.message}</p>}
                </div>
              </div>
              <div className="form__box">
                <label>
                  <input type="checkbox" className="form__checkbox" required {...register('checkbox')} />
                  &nbsp;Wyrażam zgodę na przetwarzanie moich danych osobowych przez Solars Sp. z o.o. w celu nawiązania ze mną kontaktu i przedstawienia mi oferty handlowej.
                </label>
                {errors.checkbox && <p className="error__message">{errors.checkbox.message}</p>}
              </div>
              <input type="submit" className="form__submit--btn btn btn__yellow" value="Wyślij" onClick={() => notify(false)}/>
            </form>
          </motion.div>
          {isFormSubmitted && <ToastContainer />}
        </div>
      </div>
    </div>
  );
};

export default Contact;
