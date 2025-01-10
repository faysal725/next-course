import React from 'react'
import classes from './Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/max.png" alt="an image showing max" width={300} height={300} />
        </div>
        <h1>Hi, I'm max</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur recusandae esse, </p>
    </section>
  )
}
