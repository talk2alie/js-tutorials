/**
 * Test
 */
public class Test {

    public static void main(String[] args) {

    }

    public static int countVowels(String text) {
        
        int position = 0;
        int numberOfVowels = 0;
        while (position < text.length()) {
            if (text.charAt(position) == 'a') {
                numberOfVowels++;
                position++;
            } else if (text.charAt(position) == 'e') {
                numberOfVowels++;
                position++;
            } else if (text.charAt(position) == 'i') {
                numberOfVowels++;
                position++;
            } else if (text.charAt(position) == 'o') {
                numberOfVowels++;
                position++;
            } else if (text.charAt(position) == 'u') {
                numberOfVowels++;
                position++;
            } else {
                position++;
            }
        }

        return numberOfVowels;
    }

}