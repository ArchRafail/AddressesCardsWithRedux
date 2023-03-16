# Addresses Cards with AXIOS and Redux

ReactJS project.</br>
Single page html with routing to item state.</br>
Main page has 2 buttons at the top of the window: "Add address" and "Refresh".</br>
Also, on the main page is located list of address cards.</br>
Each card contains icon of address type (home or office), id of record, country, city and street.<br>
Each card has 2 round buttons that allow edit or delete of record.</br>
After pressing the button "Edit" on card or "Add address" on the main page you will be navigated to AddressForm.</br>
So, depends of the button that was pressed AddressForm will be empty or filled with info from the card.</br>
AddressForm has 2 buttons: "Back", that navigate you to the main page and "Save", that save the record.</br>
"Save" button can be disabled if some of field is empty or after presssing the button "Save".</br>
</br>
Realized REDUX store with 2 slices of components: AddressesList and Address.</br>
2 HTTP erros were processed: 404 and 500. And according to this the proper page is showing.</br>
AXIOS connection was used to make requests to DB.</br>
</br>
Mock DB was made at mockapi.io.</br>
