var image_url_list, name_list, comment_no, price_list, cart_price_list, text_basket, text_comment, item;

// Describe this function...
function display_item() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_item_name = document.getElementById('item_name');
  element_item_name.innerText = name_list[0];
  let element_item_price = document.getElementById('item_price');
  element_item_price.innerText = price_list[0];
  let element_item_image = document.getElementById('item_image');
  element_item_image.setAttribute("src", image_url_list[0]);
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


image_url_list = ['https://images.unsplash.com/photo-1635310568932-47fd9c961c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80', 'https://images.unsplash.com/photo-1560195307-95127677e806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80', 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2665&q=80', 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80', 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2364&q=80', 'https://images.unsplash.com/photo-1636613155613-f115a2cbd267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'];
name_list = ['Laptop', 'Monitor', 'Keyboard', 'Mouse', 'Headset', 'Speaker'];
price_list = [900, 1400, 75, 40, 120, 65];
comment_no = 0;
cart_price_list = [];
let element_go_checkout = document.getElementById('go_checkout');
element_go_checkout.style.visibility = (false) ? 'visible' : 'hidden';
display_item();


document.getElementById('previous').addEventListener('click', (event) => {
  name_list.unshift(name_list.pop());
  price_list.unshift(price_list.pop());
  image_url_list.unshift(image_url_list.pop());
  display_item();

});

document.getElementById('next').addEventListener('click', (event) => {
  name_list.push(name_list.shift());
  price_list.push(price_list.shift());
  image_url_list.push(image_url_list.shift());
  display_item();

});

document.getElementById('button_addcart').addEventListener('click', (event) => {
  let element_initial_text_basket = document.getElementById('initial_text_basket');
  element_initial_text_basket.replaceChildren();
  cart_price_list.push(price_list[0]);
  text_basket = ['   -   £'];
  text_basket.unshift(name_list[0]);
  text_basket.push(price_list[0]);
  let element_item_list = document.getElementById('item_list');
  let new_li = document.createElement('li');
  text_basket.forEach((item) => {
    let new_span = document.createElement('span');
    new_span.innerText = item;

    new_li.appendChild(new_span);
  });

  element_item_list.appendChild(new_li);
  let element_total = document.getElementById('total');
  element_total.innerText = cart_price_list.reduce((a,b) => a+b, 0);
  let element_go_checkout2 = document.getElementById('go_checkout');
  element_go_checkout2.style.visibility = (true) ? 'visible' : 'hidden';

});

document.getElementById('go_checkout').addEventListener('click', (event) => {
  let element_message = document.getElementById('message');
  element_message.innerText = '{ This option will be added in the future... }';

});

document.getElementById('button_comment').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('input_text').value) != '') {
    comment_no = (typeof comment_no === 'number' ? comment_no : 0) + 1;
    let element_comment_number = document.getElementById('comment_number');
    element_comment_number.innerText = comment_no;
    let element_initial_text = document.getElementById('initial_text');
    element_initial_text.replaceChildren();
    text_comment = [' wrote: '];
    if (getNumberOrString(document.getElementById('input_name').value) == '') {
      text_comment.unshift('Unknown');
    } else {
      text_comment.unshift(getNumberOrString(document.getElementById('input_name').value));
    }
    text_comment.push(getNumberOrString(document.getElementById('input_text').value));
    let element_list = document.getElementById('list');
    let new_li2 = document.createElement('li');
    text_comment.forEach((item) => {
      let new_span2 = document.createElement('span');
      new_span2.innerText = item;

      new_li2.appendChild(new_span2);
    });

    element_list.appendChild(new_li2);
  }

});