import React, { useMemo, useState } from "react";
import styles from "./CreateNewCustomer.module.css";
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBin4Line } from "react-icons/ri";
import countryList from "react-select-country-list";
import ReactSelect from "react-select";
const CreateNewCustomer = () => {
  const countryOptions = useMemo(() => countryList().getData(), []);
  const [createCustomerData, setCreateCustomerData] = useState({
    salesAccount: [{}],
    projectManagers: [{}],
    financeDetails: [{}],
  });
  //   const handleCustomerChange = (e = {});
  console.log(createCustomerData);
  const handleAddSalesAccountBtn = () => {
    setCreateCustomerData((prevData) => ({
      ...prevData,
      salesAccount: [
        ...prevData?.salesAccount,
        { name: "", email: "", phone: "" },
      ],
    }));
  };
  const handleSalesDelete = (ind) => {
    setCreateCustomerData((prevData) => {
      let new_salesAccount = prevData?.salesAccount?.filter(
        (elem, i) => i !== ind
      );
      return {
        ...prevData,
        salesAccount: new_salesAccount,
      };
    });
  };
  const handleAddManagersBtn = (e) => {
    setCreateCustomerData((prevData) => ({
      ...prevData,
      projectManagers: [
        ...prevData?.projectManagers,
        { name: "", email: "", phone: "" },
      ],
    }));
  };
  const handleDeleteManagers = (ind) => {
    setCreateCustomerData((prevData) => {
      let new_projectManagers = prevData?.projectManagers?.filter(
        (elem, i) => i !== ind
      );
      return {
        ...prevData,
        projectManagers: new_projectManagers,
      };
    });
  };
  const handleAddFinanceDetailsBtn = (e) => {
    setCreateCustomerData((prevData) => ({
      ...prevData,
      financeDetails: [
        ...prevData?.financeDetails,
        { bankName: "", accountNumber: "", ifsc: "", contactPersonName: "" },
      ],
    }));
  };
  const handleDeleteFinanceDetails = (ind) => {
    setCreateCustomerData((prevData) => {
      let new_financeDetails = prevData?.financeDetails?.filter(
        (elem, i) => i !== ind
      );
      return {
        ...prevData,
        financeDetails: new_financeDetails,
      };
    });
  };
  return (
    <div className={styles.createCustomerMainContainer}>
      <div className={styles.CreateNewCustomerContentContainer}>
        <div className={styles.createNewCostomerContentHeader}>
          <h1>Create new Customer</h1>
          <p>
            In order to add client-specific project in your Blazde
            account,create your customers from here. Already Created the
            customer? <a href="/3">Find it here &#62;</a>
          </p>
        </div>
        <form>
          <div className={styles.nameInputContainer}>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  firstName: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  lastName: e.target.value,
                }))
              }
            />
          </div>
          <div className={styles.countryInputContainer}>
            <h4>COUNTRY / REGION</h4>
            <ReactSelect
              options={countryOptions}
              placeholder="Country"
              name="country"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  country: e,
                }))
              }
              value={createCustomerData?.country}
              styles={{
                control: (base) => ({
                  ...base,
                }),
              }}
            />
            {/* <input
              type="text"
              placeholder="India"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  country: e.target.value,
                }))
              }
            /> */}
          </div>
          <div className={styles.hrLine}></div>
          <div className={styles.companyDetailsContainer}>
            <h4>COMPANY DETAILS</h4>
            <input
              type="text"
              placeholder="Company name"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  companyDetails: {
                    companyName: e.target.value,
                  },
                }))
              }
            />
            <input
              type="text"
              placeholder="Company Registred Number"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  companyDetails: {
                    ...prevData?.companyDetails,
                    companyRegistredNumber: e.target.value,
                  },
                }))
              }
            />
            <input
              type="text"
              placeholder="Company employee Size"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  companyDetails: {
                    ...prevData?.companyDetails,
                    companyEmployeeSize: e.target.value,
                  },
                }))
              }
            />
            <input
              type="text"
              placeholder="Company Start Date"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  companyDetails: {
                    ...prevData?.companyDetails,
                    companyStartDate: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className={styles.yourDetailsContainer}>
            <h4>YOUR DETAILS</h4>
            <input
              type="text"
              placeholder="Your Job Title"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  yourDetails: {
                    ...prevData?.yourDetails,
                    yourJobTitle: e.target.value,
                  },
                }))
              }
            />
            <input
              type="text"
              placeholder="Job Function"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  yourDetails: {
                    ...prevData?.yourDetails,
                    jobFunction: e.target.value,
                  },
                }))
              }
            />
            <input
              type="text"
              placeholder="Offiial Email Address"
              onChange={(e) =>
                setCreateCustomerData((prevData) => ({
                  ...prevData,
                  yourDetails: {
                    ...prevData?.yourDetails,
                    officialEmailAddress: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className={styles.salesAccountContainer}>
            <h4>SALES ACCOUNT</h4>
            {createCustomerData?.salesAccount?.map((elem, ind) => (
              <React.Fragment key={ind}>
                <input
                  type="text"
                  placeholder="Name"
                  value={elem?.name}
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_salesAccount = prevData?.salesAccount;
                      new_salesAccount[ind]["name"] = e.target.value;
                      return { ...prevData, salesAccount: new_salesAccount };
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={elem?.email}
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_salesAccount = prevData?.salesAccount;
                      new_salesAccount[ind]["email"] = e.target.value;
                      return { ...prevData, salesAccount: new_salesAccount };
                    })
                  }
                />
                <input
                  type="text"
                  value={elem?.phone}
                  placeholder="Phone"
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_salesAccount = prevData?.salesAccount;
                      new_salesAccount[ind]["phone"] = e.target.value;
                      return { ...prevData, salesAccount: new_salesAccount };
                    })
                  }
                />
                <div className={styles.salesAccountActionContainer}>
                  <BsPlusLg
                    style={{
                      alignSelf: "flex-start",
                      cursor: "pointer",
                    }}
                    onClick={handleAddSalesAccountBtn}
                  />
                  <RiDeleteBin4Line
                    style={{
                      display: ind === 0 ? "none" : "",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSalesDelete(ind)}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className={styles.salesAccountContainer}>
            <h4>PROJECT MANAGERS</h4>
            {createCustomerData?.projectManagers?.map((elem, ind) => (
              <React.Fragment key={ind}>
                <input
                  type="text"
                  placeholder="Name"
                  value={elem?.name}
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_projectManagers = prevData?.projectManagers;
                      new_projectManagers[ind]["name"] = e.target.value;
                      return {
                        ...prevData,
                        projectManagers: new_projectManagers,
                      };
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={elem?.email}
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_projectManagers = prevData?.projectManagers;
                      new_projectManagers[ind]["email"] = e.target.value;
                      return {
                        ...prevData,
                        projectManagers: new_projectManagers,
                      };
                    })
                  }
                />
                <input
                  type="text"
                  value={elem?.phone}
                  placeholder="Phone"
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_projectManagers = prevData?.projectManagers;
                      new_projectManagers[ind]["phone"] = e.target.value;
                      return {
                        ...prevData,
                        projectManagers: new_projectManagers,
                      };
                    })
                  }
                />
                <div className={styles.salesAccountActionContainer}>
                  <BsPlusLg
                    style={{
                      alignSelf: "flex-start",
                      cursor: "pointer",
                    }}
                    onClick={handleAddManagersBtn}
                  />
                  <RiDeleteBin4Line
                    style={{
                      display: ind === 0 ? "none" : "",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDeleteManagers(ind)}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className={styles.salesAccountContainer}>
            <h4>BUSINESS CONTACT</h4>
            {createCustomerData?.projectManagers?.map((elem, ind) => (
              <React.Fragment key={ind}>
                <input
                  type="text"
                  placeholder="Name"
                  value={elem?.name}
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_BusinessContact = prevData?.businessContact;
                      new_BusinessContact[ind]["name"] = e.target.value;
                      return {
                        ...prevData,
                        businessContact: new_BusinessContact,
                      };
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={elem?.email}
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_BusinessContact = prevData?.businessContact;
                      new_BusinessContact[ind]["email"] = e.target.value;
                      return {
                        ...prevData,
                        businessContact: new_BusinessContact,
                      };
                    })
                  }
                />
                <input
                  type="text"
                  value={elem?.phone}
                  placeholder="Phone"
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_BusinessContact = prevData?.businessContact;
                      new_BusinessContact[ind]["phone"] = e.target.value;
                      return {
                        ...prevData,
                        businessContact: new_BusinessContact,
                      };
                    })
                  }
                />
              </React.Fragment>
            ))}
          </div>
          <div className={styles.salesAccountContainer}>
            <h4>FINANCE DETAILS</h4>
            <h5>Bank Details</h5>
            {createCustomerData?.financeDetails?.map((elem, ind) => (
              <React.Fragment key={ind}>
                <input
                  type="text"
                  placeholder="Bank Name"
                  value={elem?.bankName}
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_financeDetails = prevData?.financeDetails;
                      new_financeDetails[ind]["bankName"] = e.target.value;
                      return {
                        ...prevData,
                        financeDetails: new_financeDetails,
                      };
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Account Number"
                  value={elem?.accountNumber}
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_financeDetails = prevData?.financeDetails;
                      new_financeDetails[ind]["accountNumber"] = e.target.value;
                      return {
                        ...prevData,
                        financeDetails: new_financeDetails,
                      };
                    })
                  }
                />
                <input
                  type="text"
                  value={elem?.ifsc}
                  placeholder="IFSC Code"
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_financeDetails = prevData?.financeDetails;
                      new_financeDetails[ind]["ifsc"] = e.target.value;
                      return {
                        ...prevData,
                        financeDetails: new_financeDetails,
                      };
                    })
                  }
                />
                <h5>Contact Person</h5>
                <input
                  type="text"
                  value={elem?.contactPersonName}
                  placeholder="Contact Person's Name"
                  onChange={(e) =>
                    setCreateCustomerData((prevData) => {
                      // sales account name
                      let new_contactPersonName = prevData?.financeDetails;
                      new_contactPersonName[ind]["contactPersonName"] =
                        e.target.value;
                      return {
                        ...prevData,
                        financeDetails: new_contactPersonName,
                      };
                    })
                  }
                />
                <div className={styles.salesAccountActionContainer}>
                  <BsPlusLg
                    style={{
                      alignSelf: "flex-start",
                      cursor: "pointer",
                    }}
                    onClick={handleAddFinanceDetailsBtn}
                  />
                  <RiDeleteBin4Line
                    style={{
                      display: ind === 0 ? "none" : "",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDeleteFinanceDetails(ind)}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewCustomer;
