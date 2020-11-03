// const computed = {
//     data() {
//         return {
//             author: {
//                 name: 'John Doe',
//                 books: [
//                   'Vue 2 - Advanced Guide',
//                   'Vue 3 - Basic Guide',
//                   'Vue 4 - The Mystery'
//                 ]
//               }
//         }
//     }
// }


const computed = {
    data() {
        return {
            author: {
                name: 'John Doe',
                books: [
                  'Vue 2 - Advanced Guide',
                  'Vue 3 - Basic Guide',
                  'Vue 4 - The Mystery'
                ]
              }
        }
    },
    computed: {
        publishedBooks() {
            return this.author.books.length > 0 ? "Yes" : "No";
        }
    }
}



Vue.createApp(computed).mount("#app")