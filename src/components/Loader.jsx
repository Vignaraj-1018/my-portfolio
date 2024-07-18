import React from 'react'
import "./Loader.scss"

const Loader = () => {
  return (
    <div class="loader-container">
        <div class="content">
            <div class="content__container">
                <p class="content__container__text">
                    Hello
                </p>
                
                <ul class="content__container__list">
                    <li class="content__container__list__item">world !</li>
                    <li class="content__container__list__item">coder !</li>
                    <li class="content__container__list__item">users !</li>
                    <li class="content__container__list__item">uiverse</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Loader