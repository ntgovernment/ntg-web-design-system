      <main id="content" class="ntg-body">
        <div class="container-xl pt-5">
          <div class="row">
            <div class="col my-0 mt-md-4 mb-md-1">
              <h1 class="pb-0 mb-0">Nav blocks</h1>
            </div>
          </div>
        </div>
        <!-- NTG Nav block with Clikable parent topic page, icon, and call to action button -->
        <div class="container-xl mt-5">
          <section class="ntg-nav-block">
            <div class="row py-5">
              <div class="ntg-nav-block__intro col-md-4">
                <div class="d-flex align-items-start">
                  <i class="fal fa-credit-card-blank fa-2x pe-3"></i>
                  <div>
                    <h2 class="mt-0">
                      <a href="#">Clickable parent topic page with icon</a>
                    </h2>
                  </div>
                </div>

                <p>
                  Optional parent topic page description. Dolor sit amet,
                  consectetur adipiscing elit. Nunc semper ex metus, nec mattis
                  libero molestie volutpat.
                </p>
              </div>

              <div class="ntg-nav-block__list col-md-4">
                <ul>
                  <li>
                    <a href="#">Topic 1</a>
                  </li>
                  <li>
                    <a href="#">Topic 2</a>
                  </li>
                  <li>
                    <a href="#">Topic 3</a>
                  </li>
                  <li>
                    <a href="#">Topic 4</a>
                  </li>
                  <li>
                    <a href="#">Topic 5</a>
                  </li>
                  <li>
                    <a href="#">Topic 6</a>
                  </li>
                </ul>
              </div>

              <div class="ntg-nav-block__list border-left-light col-md-4">
                <ul>
                  <li>
                    <a href="#">Topic 7</a>
                  </li>

                  <h3 class="h4">Button heading</h3>
                  <p>
                    Button subtitle for call to action. Dolor sit amet,
                    consectetur adipiscing elit.
                  </p>

                  <a
                    href="#"
                    class="btn ntg-btn ntg-btn--secondary"
                    role="button"
                    >View more</a
                  >
                </ul>
              </div>
            </div>
          </section>
        </div>
        <script>
          $(document).ready(function () {
            $(".ntg-nav-block__list.border-left-light ul").each(function () {
              if ($(this).children().length === 0) {
                $(this).parent().removeClass("border-left-light");
              }
            });
          });
        </script>

        <!-- NTG Nav block with Clikable parent topic page, no icon -->
        <div class="container-xl mt-5">
          <section class="ntg-nav-block">
            <div class="row py-5">
              <div class="ntg-nav-block__intro col-md-4">
                <h2 class="mt-0">
                  <a href="#">Clickable parent topic page without icon</a>
                </h2>
              </div>

              <div class="col-md-5">
                <p>
                  Parent's description above links. Dolor sit amet, consectetur
                  adipiscing elit. Nunc semper ex metus, nec mattis libero
                  molestie volutpat.
                </p>
              </div>

              <div class="ntg-nav-block__list col-md-4 offset-md-4">
                <ul>
                  <li>
                    <a href="#">Topic 1</a>
                  </li>
                  <li>
                    <a href="#">Topic 2</a>
                  </li>
                  <li>
                    <a href="#">Topic 3</a>
                  </li>
                  <li>
                    <a href="#">Topic 4</a>
                  </li>
                </ul>
              </div>

              <div class="ntg-nav-block__list border-left-light col-md-4">
                <ul>
                  <li>
                    <a href="#">Topic 5</a>
                  </li>
                  <li>
                    <a href="#">Topic 6</a>
                  </li>
                  <li>
                    <a href="#">Topic 7</a>
                  </li>
                  <li>
                    <a href="#">Topic 8</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <script>
          $(document).ready(function () {
            $(".ntg-nav-block__list.border-left-light ul").each(function () {
              if ($(this).children().length === 0) {
                $(this).parent().removeClass("border-left-light");
              }
            });
          });
        </script>

        <!-- NTG Nav block with manual parent heading -->
        <div class="container-xl mt-5">
          <section class="ntg-nav-block">
            <div class="row py-5">
              <div class="ntg-nav-block__intro col-md-4">
                <h2 class="mt-0">Manual parent heading</h2>

                <p>Optional parent description</p>
              </div>

              <div class="ntg-nav-block__list col-md-4">
                <ul>
                  <li>
                    <a href="#">Topic 1</a>
                  </li>
                  <li>
                    <a href="#">Topic 2</a>
                  </li>
                  <li>
                    <a href="#">Topic 3</a>
                  </li>
                </ul>
              </div>

              <div class="ntg-nav-block__list border-left-light col-md-4">
                <ul>
                  <li>
                    <a href="#">Topic 4</a>
                  </li>
                  <li>
                    <a href="#">Topic 5</a>
                  </li>
                  <li>
                    <a href="#">Topic 6</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <script>
          $(document).ready(function () {
            $(".ntg-nav-block__list.border-left-light ul").each(function () {
              if ($(this).children().length === 0) {
                $(this).parent().removeClass("border-left-light");
              }
            });
          });
        </script>
        <!-- //row 1 -->
        <div class="row">
          <div class="col-12 mb-4 content__extra">
            <!-- Social share -->
            <!-- Give feedback -->
            <!-- Print date -->
            <div id="print-date" data-date=""></div>
          </div>
        </div>
      </main>
