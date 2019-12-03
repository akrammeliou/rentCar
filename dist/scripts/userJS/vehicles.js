function vehicles() {
    let html = ``
    var tabvoiture = JSON.parse(localStorage.getItem('voituer')) || [];

        for (let j = 0; j < tabvoiture.length; j++) {
         html += `
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div class="r-best-offer-single">
                    <div class="r-best-offer-in">
                        <div class="r-offer-img">
                            <a class="d-inline-block" href="#">
                                <img src="./assets/images/${tabvoiture[j].image}" class="img-fluid d-block m-auto" alt="">
                            </a>
                            <div class="r-offer-img-over">
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                        <div class="r-best-offer-content">
                            <a href="#"><b>${tabvoiture[j].marquevoiture}</b></a>
                            <p><b>${tabvoiture[j].modele}</b></p>
                            <p>${tabvoiture[j].matricule}</p>
                            <ul class="pl-0 mb-0">
                                <li><i class="fa fa-car"></i><span>2017</span></li>
                                <li><i class="fa fa-cogs"></i><span>MANUAL</span></li>
                                <li><i class="fa fa-beer"></i><span>PETROL</span></li>
                                <li><i class="fa fa-road"></i><span>2.3k CC</span></li>
                            </ul>
                        </div>
                        <div class="r-offer-rewst-this">
                        <a href="./"><span class="text-uppercase">Rent this car</span></a>
                        </div>
                    </div>
                </div>
            </div>
           `
        }
    document.getElementById('test').innerHTML = html;
}