import { createServer }  from 'miragejs'

function mockServer() {

  let server = createServer(
      {
          routes(){
            this.urlPrefix = "http://www.testdomain.com";
            this.namespace = "/v1/api";
            this.timing = 2000

            this.get("/books", () => {
                return [
                    {title: "Harry Potter 1", author: "J. K. Rowling", year: 2001},
                    {title: "Harry Potter 2", author: "J. K. Rowling", year: 2002},
                    {title: "Harry Potter 3", author: "J. K. Rowling", year: 2003}
                ]
            })
          }
      }
  )

  return server
}


export default mockServer