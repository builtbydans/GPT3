import React from 'react'
import './whatgpt3.css'
import { default as Feature } from '../../components/feature/Feature'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3?" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quas vitae, ea excepturi dolores debitis eum beatae, eligendi, quam corrupti tenetur ducimus harum rem amet nobis vero eos accusamus minus quia. Facilis veniam fuga eligendi laborum repellendus corporis deserunt ex excepturi delectus impedit est rem molestias facere eos."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Possibilities beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default WhatGPT3
