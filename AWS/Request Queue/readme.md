### English:

1. **Initialization**:

   - The function starts by converting the `wait` array into a `queue` array, where each element is an object containing the maximum waiting time (`time`) and the request's index (`index`).
   - An empty array `result` is initialized to store the number of requests in the queue at each second.
   - A variable `time` is set to 0 to keep track of the current time.

2. **Simulation Loop**:

   - The loop runs as long as there are requests in the queue.
   - At each second, the current number of requests in the queue is added to the `result` array.
   - The first request in the queue is processed and removed using `queue.shift()`.
   - The time is incremented by 1.
   - Expired requests are removed from the queue using `queue.filter()`, which filters out requests whose maximum waiting time has expired.

3. **Final State**:

   - After the loop completes and the queue is empty, `0` is added to the `result` array to represent the state when no requests are left in the queue.

4. **Return Result**:
   - The `result` array, which now contains the number of requests in the queue at each second, is returned.

### Portuguese:

1. **Inicialização**:

   - A função começa convertendo o array `wait` em um array `queue`, onde cada elemento é um objeto contendo o tempo máximo de espera (`time`) e o índice do pedido (`index`).
   - Um array vazio `result` é inicializado para armazenar o número de pedidos na fila a cada segundo.
   - Uma variável `time` é definida como 0 para acompanhar o tempo atual.

2. **Loop de Simulação**:

   - O loop continua enquanto houver pedidos na fila.
   - A cada segundo, o número atual de pedidos na fila é adicionado ao array `result`.
   - O primeiro pedido na fila é processado e removido usando `queue.shift()`.
   - O tempo é incrementado em 1.
   - Pedidos expirados são removidos da fila usando `queue.filter()`, que filtra os pedidos cujo tempo máximo de espera expirou.

3. **Estado Final**:

   - Após o loop terminar e a fila ficar vazia, `0` é adicionado ao array `result` para representar o estado quando não há mais pedidos na fila.

4. **Retornar o Resultado**:
   - O array `result`, que agora contém o número de pedidos na fila a cada segundo, é retornado.

By following these steps, the function accurately simulates the processing of customer requests according to the described rules and returns the correct sequence of the number of requests in the queue at each second.
