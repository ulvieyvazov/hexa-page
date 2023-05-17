import { Helmet } from "react-helmet";
import React, { useEffect, useState } from 'react'
import "./Add.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductAdd } from '../../schema/ProductAdd';
// import { Helmet } from "react-helmet";


const Add = () => {
  const [cata, setCata] = useState([])

  const getCata = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products")
    setCata(resp.data)
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductAdd),
  });


  useEffect(() => {
    getCata()
  }, [])

  const onPost = async () => {
    const values = getValues()
    await axios.get("https://fakestoreapi.com/products", {
      category: values.category,
      price: values.price,
    })
    // values = ""
    console.log(values);
  }

  return (
    <div>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}

      <form action="" onSubmit={handleSubmit(onPost)} style={{ margin: '50px 0' }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className='input'>
            {/* <TextField
                            required
                            id="outlined-required"
                            label="Required"
                        /> */}
            <TextField {...register("category")}
              required
              id="outlined-required"
              label="Required"
            />
            {errors.category ? (
              <p style={{ color: "red" }}>{errors?.category.message}</p>
            ) : (
              <></>
            )}
            <TextField {...register("price")}
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            {errors.price ? (
              <p style={{ color: "red" }}>{errors?.price.message}</p>
            ) : (
              <></>
            )}
          </div>
        </Box>
        <button type='submit' className="btn">Add</button>
      </form>
    </div>
  )
}
export default Add