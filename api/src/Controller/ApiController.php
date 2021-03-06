<?php
namespace App\Controller;

use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations as FOSRest;
use FOS\RestBundle\Controller\FOSRestController;

use App\Entity\Article;
use App\Entity\Weather;

/**
 * Brand controller.
 * @Route("/api")
 */
class ApiController extends FOSRestController
{
	/**
	 * @FOSRest\Options("/weather")
	 *
	 * @return array
	 */
	public function optionsWeatherAction()
	{
		return View::create([], Response::HTTP_OK, []);
	}

	/**
	 * @FOSRest\Get("/weather")
	 *
	 * @return array
	 */
	public function getWeatherAction()
	{
		$repository = $this->getDoctrine()->getRepository(Weather::class);
		$weather = $repository->findRecentSearches();

		$topLocation = $repository->findTopLocations();

		$temperatures = $repository->findAllTemperatures();

		$count = $repository->countAll();
		
		return View::create([
			"count" => $count[0],
			"top_location" => $topLocation,
			"temperatures" => $temperatures[0],
			"weather" => $weather
		], Response::HTTP_OK, []);
	}

	/**
	 * @FOSRest\Post("/weather")
	 *
	 * @return array
	 */
	public function postWeatherAction(Request $request)
	{
		$weather = new Weather();
		
		$weather->setCityid($request->get('cityid'));
		$weather->setCityname($request->get('cityname'));
		$weather->setLatitude($request->get('latitude'));
		$weather->setLongitude($request->get('longitude'));
		$weather->setTempavg($request->get('tempavg'));
		$weather->setTempmin($request->get('tempmin'));
		$weather->setTempmax($request->get('tempmax'));
		$weather->setClouds($request->get('clouds'));
		$weather->setWindspeed($request->get('windspeed'));
		$weather->setWinddeg($request->get('winddeg'));
		$weather->setDescription($request->get('description'));
		$weather->setCondid($request->get('condid'));
		$weather->setDt($request->get('dt'));

		$em = $this->getDoctrine()->getManager();
		$em->persist($weather);
		$em->flush();
		
		return View::create($weather, Response::HTTP_CREATED, []);
	}
}
