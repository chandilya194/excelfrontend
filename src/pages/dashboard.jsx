"use client";
import * as React from "react";
import { useState } from "react";
import styles from "../components/InputDesign.module.css";
import StaticMenu from "../components/StaticMenu";
import MainContent from "../components/MainContent";

export function Dashboard() {
 
  return ( 
    <> 
      
      <div className={styles.desktop1}>
        <StaticMenu />
        <MainContent />
      </div>
    </>
  );
}

