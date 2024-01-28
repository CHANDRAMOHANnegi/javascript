"use client"
import React from 'react'
import styles from './styles.module.css'

export default () => {
  return (
    <section className={styles.gameArea}>
        <div className={styles.box} data-column="0" data-row="0">
            <div>
                <span></span>
            </div>
        </div>

        <div className={styles.box} data-column="1" data-row="0">
            <div>
                <span></span>
            </div>
        </div>

        <div className={styles.box} data-column="2" data-row="0">
            <div>
                <span></span>
            </div>
        </div>

        <div className={styles.box} data-column="0" data-row="1">
            <div>
                <span></span>
            </div>
        </div>

        <div className={styles.box} data-column="1" data-row="1">
            <div>
                <span></span>
            </div>
        </div>

        <div className={styles.box} data-column="2" data-row="1">
            <div>
                <span></span>
            </div>
        </div>

        <div className={styles.box} data-column="0" data-row="2">
            <div>
                <span></span>
            </div>
        </div>

        <div className={styles.box} data-column="1" data-row="2">
            <div>
                <span></span>
            </div>
        </div>

        <div className={styles.box} data-column="2" data-row="2">
            <div>
                <span></span>
            </div>
        </div>
    </section>
  )
}
