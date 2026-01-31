import React, { useContext } from 'react'
import { useState } from "react";
import { Context } from '../Context';

const buttons = [
  "C", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "−",
  "1", "2", "3", "+",
  "0", ".", "=",
];
const styles = {
//   wrapper: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg,#020617,#020617)",
//   },
   calculator: {
    width: "100%",
    height: "100%",
    padding: 20,
    borderRadius: 24,
    background: "#000000",
    boxShadow: "0 25px 60px rgba(0,0,0,.7)",
    
  },

  display: {
    width: "100%",
    height: 70,
    fontSize: 32,
    borderRadius: 14,
    border: "none",
    marginBottom: 18,
    padding: "0 14px",
    textAlign: "right",
    background: "#000000",
    color: "#ffffff",
  },

  grid: {
    display: "grid",
    flex:1,
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 12,
  },

  button: {
    height: 56,
    fontSize: 20,
  
    border: "none",
    cursor: "pointer",
    background: "#333333",
    color: "#ffffff",
    transition: "transform .1s ease, filter .1s ease",
  },

  operator: {
    background: "#ff9f0a", // iOS orange
    color: "#ffffff",
  },

  equal: {
    background: "#ff9f0a",
    color: "#ffffff",
    gridColumn: "span 2",
    borderRadius: 30,
  },

  clear: {
    background: "#a5a5a5",
    color: "#000000",
    gridColumn: "span 2",
    borderRadius: 30,
  },}

const Calc = () => {
  const [value, setValue] = useState("");
const{full}=useContext(Context)

  const handleClick = (btn) => {
    if (btn === "C") return setValue("");
    if (btn === "=") {
      try {
        const result = eval(
          value.replace("÷", "/").replace("×", "*").replace("−", "-")
        );
        setValue(result.toString());
      } catch {
        setValue("Error");
      }
      return;
    }
    setValue(value + btn);
  };

  return (
   
      <div style={styles.calculator} className='flex flex-col '>
        <input
          style={styles.display}
          value={value}
          disabled
          placeholder="0"
        />

        <div style={styles.grid}>
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              className={`${full?"rounded-4xl":"rounded-full"}`}
              style={{
                ...styles.button,
                ...(btn === "=" && styles.equal),
                ...(btn === "C" && styles.clear),
                ...(isNaN(btn) && btn !== "." && btn !== "0"
                  ? styles.operator
                  : {}),
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
   
  );
}


export default Calc