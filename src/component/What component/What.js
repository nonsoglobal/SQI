import './what.css'
const What = ()=>{

    return(
        
    <>
        {/* <h1 style={{fontsize: "50px"}}> Thiss is new page</h1>
        <h1 style={myStyle}> Thiss is new page</h1>
        <button className='mybtn'>click me</button> */}
        <div className='d-flex fixed-bottom m-3'>
            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBAPEA8SEA8PDw8PDw8PDw8NDg0PFREXFxURFRUYHSggGB4nGxUVITMhJSkrLjAuFx8zODMtNyguLisBCgoKDg0OGxAQGi0lHSUtKy0tLS8tLSstLS0tLS0rLS0tKzAtLS0vLS0rLS0uLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQIDBAYHAf/EAEYQAAIBAgEFCA4KAQQDAAAAAAABAgMRBAUGEiExIkFRYXGBkdETFSQyUlNUc5OhsbKzwQcjNEJicoKSotJjFDPh8EPC8f/EABoBAQACAwEAAAAAAAAAAAAAAAAEBQIDBgH/xAA0EQACAQEDCAgGAwEAAAAAAAAAAQIDBBEhEhMxMkFRcZEFUoGhscHR8BQzYXKy4SKS8UL/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHlbOKlQbhFdkqLU0naMHwN8PEinOrKjoU1CDtUq3Sa2wgrXly67Ln4DRkQ7RaHB5MdJVW+3uk83T07XuJyrnLipPVNQXBGEP/a5Ssu4vx38afURKLkSDnaj/AOmU7tVZu/LfN+pKLLmK8c/20+orWW8V41/th1EWmVpjOz6z5nnxFbry/s/UlI5axPjX+yHUVLLGJ8a/2w6iMRcTGdn1nzHxFbry/s/Uk1ljEeN/hD+pUsr4jxn8Kf8AUjEyq4zk+s+Y+IrdeX9n6kj24xPjP4U+opeWMR43+EP6mBcpbGcn1nzHxFbry/s/UznlnE+N/hD+pQ8tYnxr/bDqMJsobGcn1nzHxFbry/s/UzXlvFeNf7YdRS8t4rx38YdRgsttjOz6z5j4it15f2fqZ7y7i/Hfxp9R7DOLFxf+4pcUoQS9ViMZbYzs+s+Z6rTWX/cub9Tccl5z06jUKq7HN6k76UJPl+7z9JsRymRuGaWVXUTo1HeUFeLe2Udd1zauZ8RNs9pcnkz5ltYOkJVJZupp2PyZswAJpbgAAAAAAAAAAAHPc7azli6i3oKEFyaCl7ZMiUSGc32yvyw9xEcmUtXXlxZyNpbdad/Wfi0XUVpltMrTNZpLqK4stRZWmAXEVplzA4OpWdqcb22yvaMeVmw4TNuC11Zub4I7lLn2v1G2nRnPQiTQslWtjBYb3gvXkjXLlyMJPYr8ibN2o4KlDvacY8drvp2lUsVTXfVIrlkkSfgutLuLBdE3a8+7zbRpEqU1ti1y3Rbub1HF03sqQfJJP5ntXD06nfQjPlSfrHwaerIPom/Un3fvyNBbKWzbMVm7Rlrg3TfPNdD6zXsoZMrUNco3j4cdcefg5yPUoThi1gQa9irUcZK9b1jz3GDJlDPWyhs0kQ8kW2VNlDAKZGbkCtoYqg14eg+RrR+ZgtmRkj7TQ87T99GcHdJcTOi7qkX9V4nUAAXZ2IAAAAAAAAAAABzbOd92V+WHw4kcmZ+dD7tr8sPhojospauvLizkLR86f3S/Jl1MrTLSZWmazUXUydyJkN1rVKl40t5fen1LjLWbeSOzS7JUX1UHa3jJcHIt/wD+m1ZTyjTw8NKW3ZGC2yfAuBcZMs9BNZc9BaWOxxcc9W1fH6v6ePAuznSw9PXo06cVq4ORLfZAY3OaTuqMbLw5a5Pkjvc5BY3HVK8tOo/yxXexXAkY6Z5VtcpYQwXvkLR0nOX8aX8V3/rs5mZXxlWp39Ry4nqXRsLKLVz25FeOLKyTcne8WV3LlHETg7wm4v8AC2WLi55o0Hiwd6J7B5yVIWVRKpHwrqEupmx4PG0q8W4NSX3otWkuJo57cqoYiVOSnCTjJbGtfNxolUrVOOtiixs/SVWm7p/yXfz8mbHlrN/bUoLjlSXtj1dHAas2b1kPLMcTGztGrFbqO9JeFHiIzOrI908RTXHVit9eEvn08JnWoxlHOU9Hv2zda7JCpDP0NG1e9H1Xt6q2UNnrZQyEU54zKyP9poedh7yMRsycjPumh56HvIyjrIzp664rxR1IAF4dkwAAAAAAAAAAADmWdX2yvyw+HEjkyQzq+2V+WHw4kamUtTXlxZyFo+dP7pfky6jKyfhpVqkKUds3a/grflzK5hpm35j4S/ZK7XBTh7ZP3fWe0qeXNRMrLRz1VQ2beG307TY4qnh6Xg06UeXUt/jb+ZoOUsfLEVHUlqWyMb6oR4Cdz2x1lDDp99u58ie5XTd8yNUTN9rqXvIWhe+4m9J2i+eZjoWnj+vEvXCkWkz25DKsu6R7pFu4uAXNIuYelKpKMIK8pOyRYNwzSwKjT7O1u6l0vwxTa9bXsNtGm6kriRZbO69RQ2beAoZrUtHdzk5b7jaMU+JWIbLeRJYdaalp0m7XtaUHvX6zezGx1FVKVSD+9Frn3vWWE7LBxuSuZe1ujqMoXRjc9j9d5zihiJU5xnB2lF3T+R0HJmNjiKUaitrVpR26Mt+P/d5nNtInsz8f2Ot2Jvc1tS4pJNp9F10ESy1cmVz0MqujbTm6ii9EvHY/JmFl/J3+nrSiv9uW6pv8L2x5nq6CLbN8zwwfZMPppbqk0/0SaUl7HzGhNmFenkTaWg1W6hmazS0PFdv7PJMycj/aaHnYe+jEbMnIz7pw/nafvo1R1lxI1PXjxR1YAF4dkwAAAAAAAAAAADmGdb7txHLT+GiMTJDOx93Yjlp/DRFplLU15cWchaPnT+6X5MupnTM28P2PC0Y77i5v9bcvmcwb+R13BR0adOPgwiv4olWJfybLHoeN9ST3Jd7/AEc7zgxPZMTWe8p6K5IrR+XrI9MpnUu5S4ZN87dwmQ5O9t7yrnPLk5b233lxM9uW7ntzEwLlxcouLgFdzaM1MspaOGqarv6qXG3dxfPsNUuT+auSpVaka0lalSldPxjWxLiT2vmN1nclUWT7RLsMqirLN6dvDb/pvZhZWxSo0KlTwY6uOT1RXS0Zpo+eWVFUmqEHeNN3qNbHPeXN7XxFnWqZEG+R0NrrqjSctuhcfeJrhVSrOEozW2Eotcqd17C22UyZTHJ6NB1icY1abX3akGuaUf8Ak5M01qe1anynUsiS0sNQf+KHsRzbK6tXrrgqTXrZPtmKjIuulVfGnPj33MxGzLyK+6sP56HtRgtmXkV91YfzsPfRCjrLs8Sop68eKOtAAvDsmAAAAAAAAAAAAcsztfd2I5afw0RaZI53Pu7Efmp/DRFplLU15cWcfaPnT+6X5MrbOv4GelSpy8KnB9MUcfTOoZqYjsmEovfjFwfFouy9SRJsT/k0WXQ8kqklvXh/pzerHRk4+C3F8zseXJDObDdixdZWspTU48aktL2trmI25Ekrm0VdSDhNxextFy57cyslZKrYqWjTjuV31SWpQ5998SNzweaeGhG01KrLfk5TprmUXqNtKhOpitBIs9iq11fFXLe8OW80PSFyZzgzfnh5aVOMp0Zd60nKUH4MrepmTkDNmdVqpiIuFNWag9U6nLvxXrPMzPKybsTFWSs6mayce7jfu96cDHzeyHLFPTneNBPW9jm192Pzf/Vv9KlGEVGKUYxVlFakke04KKUYpKKVkkrJLgRG5cyxTwkLu0qkv9unfXJ8L4FxljTpxoxv5s6ChQp2Sm23xfvuRjZzZZWGhoRf11RPR/AvCfy4+Q585dO/fa2VYvEzqzlUqS0pyd2/kuBFq5X1qrqSv2bCgtdqdonfsWhe9r2ntzxs8uVYai6k4U1tqSilyydvmaSLc3gjqWRIaOGoJ+Kh60jmeV56Veu951Jv1s6liKsaNKU9kaUG+aMf+DkGk9/a9bfCydbLkoxLrpZ5MYU+Pdcj1sy8hPurD+dp+8jBbMzIT7qw/nafvIhR1l2eJUUtdcUdeABeHZMAAAAAAAAAAAA5Pnc+7sT+an8JEUmSmeL7uxPLD4USITKWpry4s5C0fOn90vyZdTNy+j3H7qrh29tpw5VqkujRfMzSrmyZg0dPF6W9ShOXO1or3mZ2dtVFcbbDJq0Qyd93Zt9eKJrP7AXhDExWunuJ/kbWi+Z6v1Gj3OgfSBX0cNGHjKsb/ljuvaonPVIytaWcdxt6UjFV3dtSv4/5cdYyDRjDC0FFanTjN235SWk30tkkaPmrnPShTjh8Q9DQ1Qm+90fBlwW4dljcqOIhNaUJxlHhi010lhRnGcVcXtlrQq01kPYsNxeBE4/L+GoJ6dVNr7kN3J8y2c9jTss52Vq94U/qqT1OzTnNcct7kXSzypXhDS8dxhXttKjg3e9y0/rtNjy9nPTw96dO1StsevcQf4mtr4l6jQ8Tip1ZupUk5zltk9XNxLiMdM8uVtWtKo8dBz1ptdSu75aNi2ft/UruLlNzy5qIxVc2fMXJ/ZKzrtbiirQ4HOS+Sv0o1zA4WdepGlTV5zdlwJb8nwJHVMnYOnhaEaae5ppylJ6rvbKTJVlpZUsp6EWXRtndSpnHoj4/rS+wh8+8f2PDqinuq8rcahF3k+nRXOc7bJHOHKv+qxEqmvQW4pJ70EtvPrfORjZrr1Muba0Gi211WrOS0aF2eobM3IT7qw3nqftRgNmZkF914bz1P3ka46y4kelrx4o7GAC7OyYAAAAAAAAAAAByTPH7fifzU/hRIdMlc833fifzU/hRIdMpamvLizkLR86f3S/Jl25vX0a0NWIq+E6cFzKUn70TQkzqOYdDQwVN211J1Jv9+ivVFG6yRvqcCV0ZDKtCe5N+XmQn0j4j6zD0uCE5NfmlFL3Wahc2/OXIWLxWLqThS+rUYRhOU4Ri0oJvVe/fOW8UYfMKs7adeMOFQg6j6XontWnUnUbSZlabNXrV5yjB3X4bNGG27capcpaXAjomGzGwse/lUqcWl2OP8dfrMPKuYyd5Yepo/wCKd5R5p7Vz35TF2WpdfcYS6LtCjfcn9L8TSbnukZ2NyFi6L3dCaXhQXZIct43tzkbKVtT1PgaszQ044PAgyg4YSV3HAuXFy0qi4fUZ2EyVia2qnQnLj0XGH7nZesJN4IRTk7oq/hiY1y/k/BVcRNU6UHKT270YrwpPeRs2S8xqkmpYmoox8XHdTfE5bFzXNwwuGoYWm1BRpU465SbS/VKT28rJNOyyljLBd5ZWfoypPGp/Fd/67cfoYmb2Q4YOFluqsktOdtv4YreRrWemcanfC0ZXinatNbG1r0E+Dh6OEoznzvdROjhW4weqdbXGUlwR1alx7eTf0+5lWrRUc3T0b/fibLZbIRhmKGja/Jb79rKmym542UtkMqCpszc333VhvPU/eRHtmbm++6sN56n7yMoay4rxM6WvHijtAALs7JgAAAAAAAAAAAHH89X3fifzU/hRIZMm8+6ThlCu3snGnKPGuxxXtiyBTKWpry4s5C0q6tP7peLLjkdhwOIo4XD0adWrCm4UoRlpzjF6VlfU3w3OOXPEZ0a2bvwvvNtktTs7k1G9v6nWcVnlgIbKrm+CFObvzuy9ZEYn6QYf+LDylxzqRh6lf2mgXPbmbtdR6MDdPpSvLRcuC9bzacRnzjJ96oUl+GClLpk2vUSeTM/VqjiaVv8AJTa6XB7OZ8xoiYuYK0VE77zTG3WiMr8tvjivfC5nYMHnFg6ttHERTf3al6UuiViQWhUV9zNcO5kjiFyjQXB7TerbLaiZHpiaV0oJ9t3kzuahCGu0Y8doxMLFZbwtLv8AEQT4FLTl+2N2cZ0FwFR67a9ke89fTErsILnf5I6FlHPylFNYenKq96U/q4cttr9Rp+Vcs4jFO9ao2k7xprcxjyL5u7I24uRqlac9LIFe2Vqyuk8NywXvi2VtnjZRc8uaiMV3KWyls8bAKmzOzefdeF8/S95Ec2SObFN1MbhYrx0Zc0N2/VFmUNZcUbKXzI8V4o7UAC7OxAAAAAAAAAAAANL+kXIkq1OOJpq86CkppbZUnrv+l3fI2c00jv5o2ceYkajlVwrjTk3eVKXeN77i/u8mzkINps7k8uPaU/SFglOWcp6dq819foc7Uj1MkMTm3jqbtLC1Fxwj2SPTC5Z7TYvyat6GfUQsiW58imdKotMXyZjXPbmT2mxfktb0M+o97TYvyat6Gf8AUZMtzPM3PqvkzGuLmV2nxfk1X0dT+o7T4ryar6KfUMmW58hmp9V8n6GJpHtzK7T4ryar6KfUerI+K8mq+in1DJluYzc+q+TMW55cy+1GK8mq+in1HnafFeS1fRT6jzJluYzc+q+Ri3FzK7T4ryar6KfUO0+K8mq+in1HuS9z5DNz6r5MxLnlzL7UYryWt6KfUePI2L8lrein1DJluYzc+q+RiNnjkZfabF+TVvQz6i5h83sbUdo4Sq/zQcF0zshkS3PkM1U6r5P0I5s3/wCjbIklpYyorJxcKKfBfdz9Vlznmb+YFmqmMkmlrVCDbX6pfJdJv0IJJJJJJJJLUklvJE2zWdp5UuxFxYLBKMlVqq67QvN+RWACcXQAAAAAAAAAAAAAAAAAAAAF4AAF4AAF4AAPbwAAeXgAAXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=' alt='#' />
            <div className='chat text-center'>Need Help? <strong>Chat With Us</strong></div>
        </div>
        </>
    )
}

export default What