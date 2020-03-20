const CTA = document.querySelectorAll(".cta a");
const ALERT = document.querySelector("#booking-alert");


[].forEach.call(CTA, el => {
    if(el !== this) el.remove('hide');
});

ALERT.classList.add("hide");

function reveal(e) {
    let target = this;
    target.classList.toggle('hide');
    e.preventDefault();
    [].forEach.call(CTA, el => {
        el.toggle('hide');
    });;
    ALERT.classList.toggle("hide");
}

[].forEach.call(CTA, el => {
    el.onClick = reveal;
});
