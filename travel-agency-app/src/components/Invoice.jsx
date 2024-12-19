import {jsPDF} from "jspdf"
import html2canvas from "html2canvas"
import logoImg from "/icon.png"
const Invoice = () => {
   const printInvoice = () => {
      const element = document.getElementById("invoice");

      html2canvas(element, { scale: 2 }).then((canvas) => {
         const imgData = canvas.toDataURL("image/png");
         const pdf = new jsPDF("p", "mm", "a4");
         const imgWidth = 210; // A4 width in mm
         const pageHeight = 297; // A4 height in mm
         const imgHeight = (canvas.height * imgWidth) / canvas.width;
         let position = 0;

         pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

         if (imgHeight > pageHeight) {
            let remainingHeight = imgHeight - pageHeight;
            while (remainingHeight > 0) {
               position -= pageHeight;
               pdf.addPage();
               pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
               remainingHeight -= pageHeight;
            }
         }

         pdf.save("invoice.pdf");
      });
   };
   return (
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded shadow-sm my-6" id="invoice">
         {/* Company Info */}
         <div className="grid grid-cols-2 items-center">
            <div>
               <img
                  src={logoImg}
                  alt="company-logo"
                  height="100"
                  width="100"
               />
            </div>
            <div className="text-right">
               <p>Travel Agency Inc.</p>
               <p className="text-gray-500 text-sm">sales@travelagency.com</p>
               <p className="text-gray-500 text-sm mt-1">+91-1234567890</p>
               <p className="text-gray-500 text-sm mt-1">GST No: 8657671212</p>
            </div>
         </div>

         {/* Client Info */}
         <div className="grid grid-cols-2 items-center mt-8">
            <div>
               <p className="font-bold text-gray-800">Bill to:</p>
               <p className="text-gray-500">
                  User Name
                  <br />
                  102, San-Fransico, CA, USA
               </p>
               <p className="text-gray-500">info@laravel.com</p>
            </div>
            <div className="text-right">
               <p>
                  Invoice number: <span className="text-gray-500">INV-2023786123</span>
               </p>
               <p>
                  Invoice date: <span className="text-gray-500">{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}</span>
                  <br />
                  Due date: <span className="text-gray-500">{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()+1}</span>
               </p>
            </div>
         </div>

         {/* Invoice Items */}
         <div className="mt-8">
            <table className="w-full border-collapse">
               <thead className="border-b border-gray-300">
                  <tr>
                     <th className="py-3 text-left text-sm font-semibold text-gray-900">Items</th>
                     <th className="py-3 text-right text-sm font-semibold text-gray-900">Travellers</th>
                     <th className="py-3 text-right text-sm font-semibold text-gray-900">Price (Per head)</th>
                     <th className="py-3 text-right text-sm font-semibold text-gray-900">Amount</th>
                  </tr>
               </thead>
               <tbody>
                  <tr className="border-b border-gray-200">
                     <td className="py-4 text-sm text-gray-900">Shop SEO</td>
                     <td className="py-4 text-sm text-right text-gray-500">50.0</td>
                     <td className="py-4 text-sm text-right text-gray-500">$100.00</td>
                     <td className="py-4 text-sm text-right text-gray-500">$500.00</td>
                  </tr>
               </tbody>
               <tfoot>
                  <tr>
                     <th colSpan="3" className="py-4 text-right text-sm font-normal text-gray-500">Subtotal</th>
                     <td className="py-4 text-right text-sm text-gray-500">$10,500.00</td>
                  </tr>
                  <tr>
                     <th colSpan="3" className="py-4 text-right text-sm font-normal text-gray-500">Tax</th>
                     <td className="py-4 text-right text-sm text-gray-500">$1,050.00</td>
                  </tr>
                  <tr>
                     <th colSpan="3" className="py-4 text-right text-sm font-normal text-gray-500">Discount</th>
                     <td className="py-4 text-right text-sm text-gray-500">- 10%</td>
                  </tr>
                  <tr>
                     <th colSpan="3" className="py-4 text-right text-sm font-semibold text-gray-900">Total</th>
                     <td className="py-4 text-right text-sm text-gray-900">$11,550.00</td>
                  </tr>
               </tfoot>
            </table>
         </div>

         {/* Footer */}
         <div className="border-t mt-8 pt-4 text-xs text-gray-500 text-center">
            Please pay the invoice before the due date. You can pay the invoice by logging in to your account from our client portal.
         </div>
         <div className="flex justify-center mt-4">
            <button onClick={() => printInvoice()} type="button" id="btn" className="m-auto px-4 py-2 bg-blue-500 text-white rounded">
               Print
            </button>
         </div>
      </div>
   );
};

export default Invoice;
