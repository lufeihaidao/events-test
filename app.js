$(function(){
  // 点击评论按钮，toggle 评论列表
  $('.event').on('click', '.event-comment', function(){
    $(this).parent().next('.comments').transition('slide down');
  });
  // 点击某个 idea，后台 +1，前台 +1 变色
  $('.event-ideas').on('click', '.event-idea .detail', function(){
    $this = $(this);
    // if 后台返回 success，前台变色且+1
    if (true) {
      $this.parent().toggleClass('teal');
    }
  });
  // 点击 event-new-idea，创建新 idea
  $('#event-new-idea').on('click', 'button', function(){
    $button = $(this);
    $input = $button.prev('input');
    console.log($input.val());
    // if 后台创建成功，把这个idea append 过去
    if (true) {
      // append idea
    }
  });
});
