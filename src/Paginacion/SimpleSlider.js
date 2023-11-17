import React, { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import $ from 'jquery';
import './css.css'

function MyCarousel() {

    useEffect(() => {
      // Coloca tu código JavaScript aquí
  
      // Código para el carrusel
      $('#carouselExample').on('slide.bs.carousel', function (e) {
        // Tu código
        var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
      });
  
      // Código para mostrar el lightbox
      $(document).ready(function() {
        /* show lightbox when clicking a thumbnail */
        $('a.thumb').click(function(event){
          event.preventDefault();
          var content = $('.modal-body');
          content.empty();
          var title = $(this).attr("title");
          $('.modal-title').html(title);        
          content.html($(this).html());
          $(".modal-profile").modal({show:true});
        });
      });
    }, []); // El segundo argumento [] asegura que esto se ejecute solo una vez, como el componentDidMount
  
  

  return (
    <div class="container-fluid">
    <div id="carouselExample" class="carouselPrograms carousel slide" data-ride="carousel" data-interval="false">
        <div class="carousel-inner row w-100 mx-auto" role="listbox">
            <div class="carousel-item col-md-4  active">
               <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a href="#" title="image 1" class="thumb">
                      <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=1" alt="slide 1" />
                    </a>
                  </div>
                </div>
            </div>
            <div class="carousel-item col-md-4 ">
               <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a href="#" title="image 3" class="thumb">
                     <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=2" alt="slide 2" />
                    </a>
                  </div>
                </div>
            </div>
            <div class="carousel-item col-md-4 ">
               <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a href="#" title="image 4" class="thumb">
                     <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=3" alt="slide 3" />
                    </a>
                  </div>
                </div>
            </div>
            <div class="carousel-item col-md-4 ">
                <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a href="#" title="image 5" class="thumb">
                     <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=4" alt="slide 4" />
                    </a>
                  </div>
                </div>
            </div>
            <div class="carousel-item col-md-4 ">
              <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a href="#" title="image 6" class="thumb">
                      <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=5" alt="slide 5" />
                    </a>
                  </div>
                </div>
            </div>
            <div class="carousel-item col-md-4 ">
               <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a href="#" title="image 7" class="thumb">
                      <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=6" alt="slide 6" />
                    </a>
                  </div>
                </div>
            </div>
            <div class="carousel-item col-md-4 ">
               <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a href="#" title="image 8" class="thumb">
                      <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=7" alt="slide 7" />
                    </a>
                  </div>
                </div>
            </div>
             <div class="carousel-item col-md-4  ">
                <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a href="#" title="image 2" class="thumb">
                     <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=8" alt="slide 8" />
                    </a>
                  </div>
                  
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
  );
}

export default MyCarousel;
