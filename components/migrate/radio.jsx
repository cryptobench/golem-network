/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

const plans = [
  { name: "Address", text: "0xdcc5c1B0543e4231B0843bEED2aA079Addc8ec33" },
  { name: "Golem Network Tokens", text: "GLM", price: "12394.3" },
  { name: "Golem Network Tokens", text: "GNT", price: "130.3" },
  { name: "Ethereum Tokens", text: "ETH", price: "0.4320" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-4">
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ checked, active }) =>
              classNames(
                plan.text == "GNT" ? "border-golemblue" : "",
                "relative block bg-white border  rounded-lg shadow-sm px-6 py-4  sm:flex sm:justify-between focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center">
                  <div className="text-sm">
                    <RadioGroup.Label as="p" className="font-medium text-black">
                      {plan.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="div" className="text-gray-500">
                      <p className="sm:inline">{plan.text}</p>{" "}
                    </RadioGroup.Description>
                  </div>
                </div>
                <RadioGroup.Description as="div" className="mt-2 flex  sm:mt-0 sm:block sm:ml-4 sm:text-right items-center">
                  <div className="font-medium text-gray-900">
                    {plan.price} {plan.name != "Address" ? plan.text : null}
                  </div>
                  {plan.text == "GNT" ? (
                    <button className="mt-1 text-center  px-6 py-2 border border-transparent text-sm lg:text-base font-medium rounded-md text-white bg-golemblue shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                      Convert to GLM
                    </button>
                  ) : null}
                </RadioGroup.Description>
                <div className={classNames("border-transparent", "absolute -inset-px rounded-lg pointer-events-none")} aria-hidden="true" />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
