let elWrap = findEl(".row");
let i = 0;

posts.forEach(function (post) {
  let elWrapContent = createEl("div");
  i++;
  elWrapContent.innerHTML = `
  <div class="card w-100 mx-auto my-4 js-card p-3">
  <div class="card-list d-flex align-items-center">
    <img class="rounded-circle me-3" src="https://picsum.photos/80" alt="random img">
    <div class="card-user">
      <h4 class="m-0 h5 fw-bold">${post.user.name}</h4>
      <p class="m-0 text-dark fw-light">${post.user.username}</p>
    </div>
  </div>
  <div class="card-body p-0 ">
    <h5 class="h3 card-title my-3 text-capitalize">${post.title}</h5>
    <p class="card-text text-capitalize">
      ${post.body}
    </p>
    <a class=" w-25 " data-bs-toggle="collapse" href="#collapseExample${i}">
      Comments
    </a>
  </div>
  <div class="collapse my-3 " id="collapseExample${i}">
    <div class="card card-body card-bg p-3">
      <h3 class="text-light h4 text-capitalize">${post.comments[0].name}</h3>
      <p class="text-light m-0 h6 text-capitalize">${post.comments[0].body}</p>
    </div>
  </div>
  <div class="collapse my-3 " id="collapseExample${i}">
    <div class="card card-body card-bg p-3">
      <h3 class="text-light h4 text-capitalize">${post.comments[1].name}</h3>
      <p class="text-light m-0 h6 text-capitalize">${post.comments[1].body}</p>
    </div>
  </div>
  <div class="collapse my-3 " id="collapseExample${i}">
    <div class="card card-body card-bg p-3">
      <h3 class="text-light h4 text-capitalize">${post.comments[2].name}</h3>
      <p class="text-light m-0 h6 text-capitalize">${post.comments[2].body}</p>
    </div>
  </div>
  <div class="collapse my-3 " id="collapseExample${i}">
    <div class="card card-body card-bg p-3">
      <h3 class="text-light h4 text-capitalize">${post.comments[3].name}</h3>
      <p class="text-light m-0 h6 text-capitalize">${post.comments[3].body}</p>
    </div>
  </div>
  <div class="collapse my-3 " id="collapseExample${i}">
    <div class="card card-body card-bg p-3">
      <h3 class="text-light h4 text-capitalize">${post.comments[4].name}</h3>
      <p class="text-light m-0 h6 text-capitalize">${post.comments[4].body}</p>
    </div>
  </div>
</div>
`;

  elWrap.append(elWrapContent);
});
