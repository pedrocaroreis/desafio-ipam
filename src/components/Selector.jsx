import React from "react"
import { useState } from "react"

const DUMMY_UF = ["AA", "BB", "CC"]

const Selector = () => {
  const [selectedUF, setSelectedUF] = useState("")

  const onChangeHandler = (e) => {
    setSelectedUF(e.target.value)
  }

  return (
    <div className="text-center m-7 p-7 border-2 border-gray-500 text-3xl font-bold">
      <label className="block m-2" htmlFor="uf-select">
        Lista de UFs:
      </label>
      <select
        className="text-center"
        onChange={onChangeHandler}
        name="uf"
        id="uf-select"
      >
        <option value="">-- Escolha uma opção --</option>
        {DUMMY_UF.map((el) => (
          <option value={el}> {el} </option>
        ))}
      </select>
    </div>
  )
}

export default Selector
