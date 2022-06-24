import React, { useState } from "react";
import { ShopNowButton } from "../components/Buttons";
import PersonalInfo from "../components/PersonalInfo";
import { Container, Item } from "../containers/Grids";
import { UserFields } from "../components/FieldsData";
import { useDispatch } from "react-redux";
import { userDetails } from "../redux/slices/usersSlice";

const Payment = () => {
  const dispatch = useDispatch();
  const [personalInfo, setPersonalInfo] = useState(true);
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [checkoutInfo, setCheckoutInfo] = useState([]);
  const [values, setValues] = useState("");

  const headings = [
    { title: "User Details" },
    { title: "Payment Details" },
    { title: "Checkout Details" },
  ];
  const handleHeading = (heading) => {
    console.log(heading);
    if (heading === "User Details") {
      setPersonalInfo(true);
      setPaymentInfo(false);
      setCheckoutInfo(false);
    } else if (heading === "Payment Details") {
      setPersonalInfo(false);
      setPaymentInfo(true);
      setCheckoutInfo(false);
    } else if (heading === "Checkout Details") {
      setPersonalInfo(false);
      setPaymentInfo(false);
      setCheckoutInfo(true);
    }
  };
  const handleSave = () => {
    // setPersonalInfo(false);
    // setPaymentInfo(true);
    // setCheckoutInfo(false);
    // console.log(values);
  };
  // const handleChange = (e) => {
  //   // setValues(e.target.value);
  //   console.log(values);
  // };
  console.log(values)
  return (
    <Container minHeight="60vh" paddingLeft="2rem" paddingRight="2rem">
      <Item flex="flex" justify="space-between" align="center">
        {headings.map((heading, index) => (
          <ShopNowButton
            title={heading.title}
            onClick={() => handleHeading(heading.title)}
            key={index}
            color="#05386B"
          />
        ))}
      </Item>
      {personalInfo === true && (
        <PersonalInfo
          fields={UserFields}
          title="User Details"
          color="#05386B"
          variant="h5"
          TextMarginBottom="1rem"
          size="small"
          spacing="6"
          paddingTop="2rem"
          paddingBottom="2rem"
          paddingRight="2rem"
          paddingLeft="2rem"
          onClick={() => handleSave()}
          // onChange={(e) => handleChange(e)}
          value={values}
          setValues={setValues}
        />
      )}
      {paymentInfo === true && <Item> payment info</Item>}
      {checkoutInfo === true && checkoutInfo === true && <Item></Item>}
    </Container>
  );
};

export default Payment;
