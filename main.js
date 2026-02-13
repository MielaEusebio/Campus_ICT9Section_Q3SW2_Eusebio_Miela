function compute_range(){
    let budget = Number(document.getElementById("budget").value);
    let percentageoff = (0.20 * budget);

    document.getElementById("result").innerHTML = 'We have got deals that make it within ' + percentageoff + ' pesos' +' based off of your budget!' + '<br>' + '<br>';

    document.getElementById("details").innerHTML = '<br>' + ' We have LAPTOP FACTORY (Main Branch) in the Philippines!' + '<br>'+ ' Address: Units 101 & 103, 717 P&S Bldg, Brgy Mariana, Aurora Blvd, QC (right across Robinsons Magnolia)' + '<br>' + 'Contact Number/s: 0919-009-1943 / 0917-705-4924' + '<br>' + '<br>' + '<img src="https://yt3.googleusercontent.com/IABDleYWUw99Behys2caxyrEBgkq4n8WTvlE3d4RNglQzqqcE-7xRCp9dQmncBD5G2KAJdqsapk=s900-c-k-c0x00ffffff-no-rj" alt="Picture of logo" class="img-fluid img-thumbnail mx-auto d-block" width="200;">';
<!-- Laptop Factory. (n.d.). YouTube. https://www.youtube.com/@LaptopFactory -->
    document.getElementById("details2").innerHTML = '<br>' +' We have PC EXPRESS in the Philippines!' + '<br>'+ ' Address: Metro Manila, Quezon City ROG Concept Store SM North'+ '<br>' + '<br>' + '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDCBwRN8sxxfNMSXP-sy1898DiGwVoOEgBg&s" alt="Picture of logo" class="img-fluid img-thumbnail mx-auto d-block" width="200;">';
<!-- SM Center Pulilan PC EXPRESS. (n.d.). SMSUPERMALLS. https://www.smsupermalls.com/mall-directory/sm-center-pulilan/shops/pc-express -->
}

