import React from 'react'
import AddressCard from '../Addresscard/AddressCard'
import { Button } from '@mui/material'
import CartItems from '../Cart/CartItems'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard/>

        </div>
        <div className="pt-5 mt-5">
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2 space-y-4">
          {[1,1,1,1].map((item)=><CartItems />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4 mt-3 px-5">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span className="px-5">Price</span>
                <span className="pr-5">₹4699</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span className="px-5">Discount</span>
                <span className="pr-5 text-green-600">-₹1999</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span className="px-5">Delivery Charge</span>
                <span className="text-green-600 pr-5">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black font-bold">
                <span className="px-5">Total Amount</span>
                <span className="pr-5">₹1700</span>
              </div>
            </div>
          </div>
          <Button
                  variant="contained"
                  className="w-full mt-5"
                  sx={{
                    px: "2.5rem",
                    py: "0.7rem",
                    bgcolor: "#9155fd",
                    marginTop: "1rem",
                  }}
                >
                  Checkout
                </Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary