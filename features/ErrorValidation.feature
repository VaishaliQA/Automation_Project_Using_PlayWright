Feature: Greeting

		Scenario Outline: Say hello
		Given a login to Ecommerce2 application with "<username>" and "<password>"
		Then Verify Error message is displayed

		 Examples:
          | username    	  	| 	password  |
          | prii111@gmail.com 	| Test@1234   |
       
       
