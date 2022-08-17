using System;

namespace HalloWelt
{
    class Programm
    {

        static double totalprice = 0;
        static double totaltaxes = 0;

        static double porto = 0;

        static double standardtaxes = 0.19;

        static object[,] table = {
            {"Pflegespülung Plus", 3, 7.95} ,
            {"Conditioner Tropical", 1, 5.95} ,
            {"Antischuppen Spezial", 5, 9.99}
        };

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.Encoding.UTF8;


            coverLetter();

            Console.WriteLine("");
            Console.WriteLine("");


            Console.WriteLine("Produkt\t\t\t\tMenge\t\tUst. "+  standardtaxes * 100 +"%\t\tPreis\t\tGesamt");

            for(int i = 0; i < table.GetLength(0); i++)
            {
                printrow(i);
            }




            Console.WriteLine("");

            printporto();

            Console.WriteLine("");
            Console.WriteLine("Ums.: " + Math.Round(totaltaxes, 2) + "€");
            Console.WriteLine("Gesamtsumme: " + totalprice + "€");


        }





        static void coverLetter()
        {

            string name = "Herr Mustermenn";
            string date = "01.02.2009";


            Console.WriteLine("Hallo " + name + @",
hiermit übersende ich ihnen die Rechnung für meine Leistungen am " + date + @".
Vielen Dank, dass Sie unsere Dienste genutzt haben.
            
Mit freundlichen Grüßen
Julius Ladiges");
        }

        static void printrow(int row)
        {
            showPrice( (string) table[row, 0], (int) table[row, 1], (double) table[row, 2]);
        }


        static void showPrice(string productname, int amount, double price)
        {
            double total = amount * price;
            totalprice = totalprice + total;
    
            double taxes = total * standardtaxes;

            totaltaxes = totaltaxes + taxes;


            Console.WriteLine(productname + "\t\t" + amount + "\t\t" + Math.Round(taxes, 2) + "€\t\t\t" + Math.Round(price, 2) + "€\t\t" + Math.Round(total + taxes, 2) + "€");
        }

        static void printporto()
        {
            if(totalprice > 25)
            {
                porto = 0; 
            } else if(totalprice > 15)
            {
                porto = 2.95;
            } else
            {
                porto = 5.95;

            }

            totaltaxes = totaltaxes + porto * standardtaxes;
            totalprice = totalprice + porto;
            Console.WriteLine("Versandkosten:\t\t\t" + "1\t\t" + Math.Round(porto * standardtaxes, 2) + "€\t\t\t" + porto + "€\t\t" + Math.Round(porto + Math.Round(porto * standardtaxes, 2), 2) + "€"); 


        }
    }
}