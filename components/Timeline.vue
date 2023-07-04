<template>
  <section id="timeline" class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-8 text-center">Parcours</h2>
      <div class="relative m-8">
        <div
          class="border-r-2 border-black absolute h-full top-0"
          style="left: 15px"
        ></div>
        <ul class="list-none m-0 p-0">
          <li v-for="(item, index) in items" :key="index" class="mb-12">
            <div class="flex items-center mb-1">
              <div
                class="bg-black rounded-full h-8 w-8 border-4 border-white z-10"
                :class="{
                  'ml-0 -mr-4': index % 2 === 0,
                  'ml-auto mr-0 -ml-4': index % 2 === 1,
                }"
              ></div>
              <div
                class="w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                :class="{ 'ml-4': index % 2 === 0, 'mr-4': index % 2 === 1 }"
              >
                <h3 class="text-2xl font-semibold mb-2">{{ item.title }}</h3>
                <img
                  class="logo h-16 w-auto mb-4"
                  :src="item.logo"
                  :alt="`Logo ${item.title}`"
                />
                <p class="leading-6">{{ item.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      items: [
        {
          title: "Diplôme d'ingénieur",
          logo: "_nuxt/isep.png",
          description:
            "2024 : diplôme d'ingénieur du numérique spécialisé en Cybersécurité.",
        },
        {
          title: "Stage Pentest Groupe La Poste",
          logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbAAAAB0CAMAAADTnpcOAAAAkFBMVEX///8APaUAO6QAOaQAM6IAMKEAJZ4WRqkAKJ8AN6NDX7EANaMALqEALKDp7fUAK6AAIp6Ek8egrdTa3+6YptFWcLm/yOKvutt4isTR2OsAHp2otNhpf7+0v93i5vL19/vJ0OYyVq4AAJiKmsu9xuFiebwpUKxzh8KUos9Qa7ZGY7MaR6kxVa5+kMYADJoAF5sKsVOgAAAM1UlEQVR4nO2diXaqOhiFJQwGEyDizCBYnKq1ff+3uxlAEQLi0fbYc/Ots+6y+AMxmyQ7E7fXUygUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhULxD+JyukQmSXIrZDSNwzBOl233W6xvhfx9UvvYP/bFv/w/tQOXY5cvakHbeaes5YwBPUGf3YiaflqUz3VzhGZjKyBn+od5OJLFLbKPAHqY4sFgtZfHzAGBPMQKVsM0PxppjbkBxvT7jSbPDe10Oxf+jOWRIPAMdCNoydprxpie4N0S7KhrFP3YHGHoQCsBdIQtO6sWtnhrGfolSjfIRy2l6dZCoBTiwR2XNTIafzDe0+8nDZlnzrvmxf2k7wRpzwB8da1MxiYNxzcEi6G4bIuwCEhSYQTjcsxoC/VqjA5X10mNSDUGIHKgMVFz1phcMFv+Jfq2EsZY7ogh+el3gzYdb9hJMC1PEtAaQ2SCUeDkEuIHZymAfimQehCXrrMyRQAyTNMoLgqI+6qC0UY78/DjkgHS8XZdBAud4rJO2BQj8tbxBA4uaj5vWERkRBzRTUj6q1WfQFPEgMA/X2bD9UKWFmXjcbbpE8xiHBawgWaBOA+d/yZZrxDMMKtY31gl5viaV6s67oXc9GqCLoLZTAybJQkYTTFcMCdN08VikU7X4XBFxBMf5DWeL/TSrQ8/PzLyt1A8mucylvIgPDl7kWR2IEi0nWu/IDywtKDh+YCf9nLBjL1fY9otJx5ivbIea8yeWcJ8zHNizlKExw1BXLCgfGQ5MFhK0I7/NQp4uoxjWo6ZakikNre1PNPzM87XmbwtKjc7sbNgxWHyc63u/vjJLCZBQ7PQiWe2YayGBlbisiwHTkNQXbBe71AqlFteZ+Basia8DrQP4i+LXQVWM72qV48/O7By+C8LRp+suWX+sWSBtIMj4bZgexZh0lZix7KJt+8SZIKNuLnkpWfNPxqSx+idlzHCcz/hNWK16NR5TcFo+vcm/rPGzNjdvrrgpmAJFAWs13NZdvJPEmSC9SyWFos1WaKwSU0md8WiRhCC6YNbiX5VwSizI2xwq20A2NFydBAsKwoYzSfWKBlDaViLYDQPE96CedLufIh5FP8s+g+24bfn+wsLRtvlwf2dace/fd2cW4IlrFkBUHzmBUDuP2WCLUWVSD+tWccAmPJbcFlhyj7usXjgTLLKps0PXbNgeDat0HnM53mMNnd2ptuGkKrcEoyXqqLhOrE/kLRfIxNsw/KV14O8HUSR/BbvrLrEood3LB5O3fBIfzeTD9g0C6Zh5xrvq/GnfSPuEGKjO0Ha/dI3BBPtlpf/xYubFsiqHYlgQ08r9J23+ZUhr2kzcYcP7/JsAoSJNpRYkBbBqpzT/tOMh91pyBj5ddsFi647XzxvpSWlIliyGPfFIBP3f/wyZkNFnV01jb7hlfszwCCDO2z96wj2XbQLtuQFDJ//FkWMSCoqnsmg398yNMeCeZfE4IOJokfQ0OnOSiWMsd540CyJZgfVSlgJ1iTYpjq6IYrYpB4pMhgAnQHOuY36/NusufHLb3Jd/BZ+pBHPLPo0TqX/1iKYRSq8tf36X0irYHw8CYDyIT4wTertinRYBsCBsHozzMuf/C7cUXm1Eb8k3R+sfBzcuk7gS9v6b6ZVsHeWB/qkNJAqxl2LkaQSdcF0A4JicJ9XrZpVa4wYKfcm8s5CMutz26hvrw4rweSCLfIB9vJkhailSC3rhWB5EJv/J9tTevmaT1nrdZ0pH/wRaBzdEDXdtZ6/QbDd4ElUfmabYIPGcTF9VY3lgpmhP2b4cVqpNPmIv+ZJfGImvonr3wiSy/jWmdcXLDYN/TmgSkPSIlhqNelFMyatBEuHpkoI00hqE6BjfpPzKOOk3jqK4ZUrIV5dMPfdesayAZYxyKoYrhbBeF0F7BosLZVG5bZgsVDf2l3VbclGrBYhqfh7D4Oo0meIuV9BV8deXLAx+YPxX4lYtmkZu2rVwwUzxsvRFSwvpiwvgTapwU07rIzR3RKstxHDhMjLzoVodIJiJMrJl10sqStF5L2cxpBPSpvXI87NgjnpqE6nXH4ao63zhOJFLRuc+JKkc8E0+m2Z4L2X+wRHUvbGLOv1StV6U7DeIV9eY1jG5JRl83cM8yFSXPTrxGo6G5PBcJYuRulsbnBfX519aOmHObDG248uR50HDy/vAMghq73UUheCVWDrMGLmtuUzWDwTK0vebgvWm8BiEZSNDAMV66aAVQx1zT6L36ob1GdCD+fd8a+0kindRzq0n60mp8h4VCxMtPm6eaZCJhhfVKFJVMnhlq+iZQfBer5sosgodYpHAyLpgCMx9VLiVQVLJo+ZDd2EeDNrT67v1c9jlowvbavWewVGaUIkp4tgPTci5lWFoWMyv3qYFpHlXGkGjGBTe9zkgjVNG/6YYP4jK6d0wwsO49vtbXIkVoUvZgECdvizoXc00um35GqmicffHrdLxh+Bhw1EobVeMPDrZX8dIeKZPMTElj2UtEDRF7tZRbAFqf0SwQ+1YaOt96fFi9WD2/Mmglu4NejB5MZ2Ff59ObPv2N6S+sPdZrPLwrSppnanLCQ67WN5Xifym9V/SfdUPczwD80GsLGFdvErdEf+T6RAZt5uIsz7a2+q+hdJNuT+2rDVvCu+kxDeaza4eT+1mHfF97FcwfuKVxfzrvg2stp+tlaxDI90Me+KbyLV8F314DZL/3aS/88k9e2iTWJR827vYtVo/VVmTjezQRstS5n3v4576GI2lHl/Ffa3ZymFeZftEVAW8adZHG+ZDVoPmpHMvC/9yZsS7IfZtZuNRvOexDvdwlbTvmPF9xAbLbOUzeY9zbaETck2TVrdgTvL5qf9ZaRkMY1nYRjOptcPyTKkYePSEt319PxHOhWnL+iZfhjGi+Jibnmz1r9QFbQsiWLmXZea99H4QLz8VRjWo681WBwIm6EyHXJIxZENwRzHgrtzHk+3LMwwPXLKU+S+XXZfHeEnt0IbS5wKyVbMJM++vDOf6YNJfQEal0Rx8x5KzLs722B4mbiVLJu+j32gA3ovi15T/xKrkyKkGWw3HDYAKjab0WpbxzTMQ8A0RLIS67KpcqWLGeD8VEwvZrGlPGyZmo5zqmszfh8NS6IAbbQGMvOerE8awVdz6MGDHTKfaAj4o8Rd+FvoibITISNjNVicGSB/0cPc08xjSMPSHQG6eDODXDB26joerwwNskUEMdYHrH5l/PrO40kyS8karb7UvC/2K+JUF6kYD75JyQ1Ku4fifElAhHC+7ND1xO7jRaDhYrfQiJY7Xnjkgjnr4iI2i4px53eGvDpTVJul1E2rwbyHEwsaEnlxPfYuMkOyI5oKVqzmWOlOzI+UdjKklijX7YKlDl8e/M8IVlsSRc279S5b6+nGO9vCttSaeI1v6+rIVsf1S1xKWAJFCfOAl9ZOahdsbPIXbsQYbOeC3V/Y0f80rpdE0XowaDDvw22l0boSubrE/W6CfLnY8k3sV+RpiJDpu8vlchFqALA3aCTkarHYHPEdrg2CcdeahA7gb/egpgMgAfy9HcZlabM8M++gybwHnqQevOj8qONgb3fyeEa7Ac1RoJ2tnmlR3whNYH+xYlERbNcmmGZCk56Ngc0tDHOJ+Xqzz3t2y78UlyVR1LzDLuZdrtfX43XMwRZ7xd1JFEUf4JzrSGzeQ/l+Mhvg0hrFPuD7XaiM8HJIvCKKnsr2OdvIJB9cYuoSJ/miOfeXTgcVS6L0O8y7DDt4wpsAfVzaynNChWBo5/vhwD5v3DuVvcnM0wKe9w4olt+6Vr5JMkKAvUdgsCl+2K83HWJJFDPvx+7mXVa84MdTejW06vooaruJXQjGTUeCgJFbfub+D3lqY0szxcvHNqhQlH4SzWnRhp357YLNPASazbsvN+91tRDUbr0JuyPpF9BJFKfpbIdRvnm5sPXLABRbt8JAs+GchvkfsHiZQ2/0RT/6aRrSXnJe3C8uMYe6xI8sf+PLqXFj7KviDiyz0bxHiJl3/h5zjp2bK/Y2Ir7Tmw/veZ4Hib1Ln5amNaEdYex5GOnFxoNzP2wdaFa+LzkMEA8zdR2uipoh/NKBSU/V9SB/MUpNsBl1icU7lWDW+2Xs3qTmPVnv7Le3r4AExDPtfv9jNRgc3iebTRTt5qdhtt+Px34YzmZxPJ2m6eK5g97uHEI+0muc8kp2ExTbIMaf1lv+0Y342/+9YlSXs1gFDj2VHIt6cBJUdlCkb6VtFvJX970y0qxORku3w/8B4xtZxH64vjSJtA9WpCZZLkelsDCsTpG407Dh1MuRM//C9IpCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgU/xj/AVXIBbB3sJHRAAAAAElFTkSuQmCC",
          description:
            "Stage de 6 mois en tant que pentesteur web + réseau au sein de la BGPN du groupe La Poste.",
        },
        {
          title: "Président Innovation Hub",
          logo: "_nuxt/assets/img/garage.png",
          description:
            "Président de Garage Isep pour le mandat 2023-2024 du plus grand Innovation Hub étudiant de France.",
        },
        {
          title: "Erasmus CVUT Prague",
          logo: "_nuxt/assets/img/cz.gif",
          description:
            "Échange universitaire de 6 mois à l'école Polytechnique de Prague.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
