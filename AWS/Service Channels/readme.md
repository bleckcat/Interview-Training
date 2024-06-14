### English:

To solve the problem of maximizing the sum of the medians of packets sent through a specified number of channels, the following steps were taken:

1. **Sorting the Packets**: The packets are sorted in non-decreasing order to easily select the largest packets for individual channels.
2. **Summing Individual Channels**: The `channels - 1` largest packets are added directly to the sum, as they will each form their own channel, contributing their full value as their median.
3. **Calculating Median for the Last Channel**: The remaining packets are used to form the last channel. The median of these packets is calculated, and since the number of remaining packets can be either odd or even, the median calculation is handled accordingly.
4. **Rounding Up**: The result is rounded up to the nearest integer using `Math.ceil` to meet the problem's requirement of rounding up floating-point values.

### Portuguese:

Para resolver o problema de maximizar a soma das medianas dos pacotes enviados através de um número especificado de canais, os seguintes passos foram seguidos:

1. **Ordenação dos Pacotes**: Os pacotes são ordenados em ordem crescente para selecionar facilmente os maiores pacotes para canais individuais.
2. **Somando Canais Individuais**: Os `channels - 1` maiores pacotes são adicionados diretamente à soma, pois cada um formará seu próprio canal, contribuindo com seu valor total como mediana.
3. **Calculando a Mediana para o Último Canal**: Os pacotes restantes são usados para formar o último canal. A mediana desses pacotes é calculada, e como o número de pacotes restantes pode ser ímpar ou par, o cálculo da mediana é tratado de acordo.
4. **Arredondamento para Cima**: O resultado é arredondado para cima usando `Math.ceil` para atender ao requisito do problema de arredondar valores de ponto flutuante para cima.

This method ensures that the sum of the medians is maximized by using the largest packets as individual channels and efficiently finding the median of the remaining packets.
