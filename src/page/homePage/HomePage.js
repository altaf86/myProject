import React from "react";
import ConnectIn from "../../component/connectInMirats/ConnectIn";
import CreateNewCustomer from "../../component/CreateNewCustomer/CreateNewCustomer";
import Editor from "../../component/Editor/Editor";
import MiratsProduct from "../../component/miratsProduct/MiratsProduct";
import PanelBookFile from "../../component/PanelBook/PanelBookFile";
import SupplierPartnerPage from "../../component/supplierPartnerPage/SupplierPartnerPage";
import SupplierWelcomePage from "../../component/supplierWelcomePage/SupplierWelcomePage";
import FilterTable from "../../component/FilterTable/FilterTable";
const HomePage = () => {
  return (
    <div>
      {/* HomePage */}
      <MiratsProduct />
      <ConnectIn />
      <PanelBookFile />
      <SupplierPartnerPage />
      <SupplierWelcomePage />
      <Editor />
      <CreateNewCustomer />
      <FilterTable />
    </div>
  );
};

export default HomePage;
