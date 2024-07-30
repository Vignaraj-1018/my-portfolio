import React from 'react'
import "./Loader.scss"

const Loader = () => {
  return (
    <div className="loader-container">
        <div className="content">
            <div className="content__container">
                <p className="content__container__text">
                    Hello
                </p>
                
                <ul className="content__container__list">
                    <li className="content__container__list__item">world !</li>
                    <li className="content__container__list__item">coder !</li>
                    <li className="content__container__list__item">users !</li>
                    <li className="content__container__list__item">uiverse</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Loader