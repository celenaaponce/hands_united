export default function Donate() {
  return (
    <div style="position:relative;overflow:hidden;height:1200px;width:100%;">
      <iframe
        title="Donation form powered by Zeffy"
        style="position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%"
        src="https://www.zeffy.com/embed/donation-form/3ab5b5ab-dfc3-4373-a391-311962616835"
        allowpaymentrequest
        allowTransparency="true"
      ></iframe>
    </div>
  );
}
