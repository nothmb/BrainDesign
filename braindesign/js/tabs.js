const tabsReview = document.querySelectorAll('.review');
const tabsReviewContent = document.querySelectorAll('.review-content');

for(let btn of tabsReview) {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        tabsReview.forEach(item => item.classList.remove('review__active'))
        btn.classList.add('review__active')

        tabsReview.forEach(cont => {
            if(cont.dataset.tabsReview === btn.dataset.tabsReviewContent) {
                cont.classList.remove('hidden')
            } else {
                cont.classList.add('hidden')
            }
        })
    })
}